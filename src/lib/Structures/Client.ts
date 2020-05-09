import { Client, KlasaClientOptions } from 'klasa';
import { Client as Functions } from '@kcp/functions';
// plugins
Client.use(Functions);

export default class Mishify extends Client {

	public userAgent: string
	constructor(options?: KlasaClientOptions) {
		super(options);
		this.userAgent = this.constructor.name;
	}

}
