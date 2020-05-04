export default class SharderIPC {

	public sharder: any
	public onEvents: Map<string, any>
	public onceEvents: Map<string, any>
	constructor(sharder: any) {
		this.sharder = sharder;
		this.onEvents = new Map<string, any>();
		this.onceEvents = new Map<string, any>();
	}
	/* eslint-disable consistent-return */
	public send(subject: string, payload: string, shard: any, timeout?: number): any {
		try {
			console.log('Enviando mensaje a un shard', { subject: subject, payload: payload, shard: shard });

			if (shard === '*') {
				return this.sharder.broadcast(subject, payload, timeout);
			} else {
				shard = this.sharder.shards.get(shard);
				if (!shard) shard = this.sharder.shards.get(0);
				return shard.send(subject, payload, timeout);
			}
		} catch (err) {
			console.log('Fallo al enviar un mensaje al shard :C\n', { subject: subject, payload: payload, shard: shard }, err);
		}
	}

	public on(event: string, callback: any): void {
		this.onEvents.set(event, callback);
	}

	public once(event: string, callback: any): void {
		this.onceEvents.set(event, callback);
	}

	public forward(event: string, prop = 'guild'): any {
		this.onEvents.set(event, async (msg, callback) => {
			const target = prop === 'this' ? msg : msg[prop];
			const ID = target === '*' ? target : this.sharder.IPC.shard(target);
			if (this.sharder.shards.has(ID)) return callback(await this.send(event, msg, ID));
			return callback({});
		});
	}

	public shard(guildID: number): number | undefined {
		try {
			// eslint-disable-next-line no-undef,no-bitwise
			return Math.abs(Number((BigInt(guildID) >> BigInt(22)) % BigInt(this.sharder.count)));
			/* eslint-disable id-length */
		} catch (_) {
			return undefined;
		}
	}

}

