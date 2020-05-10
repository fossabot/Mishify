import { Client, KlasaClientOptions } from 'klasa';
import { Client as Functions } from '@kcp/functions';
import defaultGuildSchema from '../Schemas/defaultGuildSchema';
import permissionsLevels from '../Schemas/PermissionLevels';

// plugins
Client.use(Functions);

export default class Mishify extends Client {

	public userAgent: string
	constructor(options?: KlasaClientOptions) {
		super({ ...options, defaultGuildSchema, permissionsLevels });
		this.userAgent = this.constructor.name;
	}

}
declare module 'klasa' {
	interface KlasaClientOptions {
		defaultGuildSchema: any;
		permissionsLevels: any;
	}
}
