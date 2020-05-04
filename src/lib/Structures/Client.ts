import { Client, KlasaClientOptions } from 'klasa';
import { Client as Functions } from '@kcp/functions';
import ProcessAsPromised from 'process-as-promised';
// plugins
Client.use(Functions);

export default class Mishify extends Client {

	public IPC: ProcessAsPromised
	constructor(options?: KlasaClientOptions) {
		super(options);
		this.IPC = new ProcessAsPromised();
	}

}
