import _cluster from 'cluster';
import ProcessAsPromised from 'process-as-promised';
import { SharderIPC } from '../';
class Shard {

	public process: any
	public sharder: Sharder
	public worker: any
	public IPC: ProcessAsPromised
	public readonly id: number

	constructor(id: number, process: any, sharder: Sharder, worker: any) {
		this.process = process;
		this.sharder = sharder;
		this.worker = worker;
		this.id = id;
		this.process.setMaxListeners(0);
		this.IPC = ProcessAsPromised;
		this.process.once('exit', () => {
			console.log(`[SHARDER] Shard ${this.id} se ha detenido.${!this.sharder.shutdown ? ' Reiniciando...' : ''}`);
			if (!this.sharder.shutdown) this.sharder.create(this.id);
		});
		this.sharder.IPC.onEvents.forEach((callback, event) => {
			/* eslint-disable consistent-return */
			this.IPC.on(event, (...args) => {
				if (!this.sharder.shutdown) return callback(...args);
			});
		});
		this.sharder.IPC.onceEvents.forEach((callback, event) => this.IPC.once(event, callback));
	}
	public send(event: string, data: any, timeout: any): any {
		return this.IPC.send(event, data, timeout || undefined);
	}

	public eval(code: string): any {
		return new Promise(resolve => this.IPC.send('eval', code).then(res => resolve(res)));
	}

}


export default class Sharder {

	public cluster: any
	public readonly token: string
	public readonly host: string | undefined
	public readonly count: number
	public readonly mode: string
	public IPC: SharderIPC
	public shards: Map<number, Shard>
	public shutdown: boolean
	constructor(token: string, count: number) {
		this.cluster = _cluster;
		this.cluster.setupMaster({
			exec: 'Mishify.js'
		});
		/* eslint-disable no-process-env */
		this.token = token || process.env.TOKEN;
		this.host = process.env.MISHIFY_HOST ? process.env.MISHIFY_HOST : undefined;
		this.count = count;
		this.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
		this.IPC = new SharderIPC(this);
		this.shards = new Map<number, Shard>();
		this.shutdown = false;
	}
	public spawn(): void {
		console.log('[SHARDER] Iniciando shards.');
		for (let i = 0; i < this.count; i++) {
			this.create(i);
		}
	}

	public create(id: number): void {
		console.log('[SHARDER] Creando shards e instanciandolos en un proceso', { id: id });
		const worker = this.cluster.fork({
			CLIENT_TOKEN: this.token,
			SHARDS: id,
			SHARD_COUNT: this.count,
			MISHIFY_HOST: this.host,
			NODE_ENV: this.mode
		});
		const shard = new Shard(id, worker.process, this, worker);
		this.shards.set(id, shard);
	}

	public broadcast(subject: string, message: string, timeout?: number): any {
		console.log('Difundiendo mensaje en todos los shards', { msg: message });
		const promises = [];
		for (const shard of this.shards.values()) promises.push(shard.send(subject, message, timeout));
		return Promise.all(promises);
	}

}
