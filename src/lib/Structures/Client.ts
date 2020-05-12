import { Client, KlasaClientOptions } from 'klasa';
import { Client as Functions } from '@kcp/functions';
import defaultGuildSchema from '../Schemas/defaultGuildSchema';
import permissionsLevels from '../Schemas/PermissionLevels';
import { util } from '..';
import { MessageEmbed } from 'discord.js';

// plugins
Client.use(Functions);

export default class Mishify extends Client {

	public userAgent: string
	constructor(options?: KlasaClientOptions) {
		super({ ...options, defaultGuildSchema, permissionsLevels });
		this.userAgent = 'Mishify bot';
	}
	public async fetchURL(url: string, options: any): Promise<Buffer | any | string> {
		options.headers = options.headers ? { ...options.headers, 'User-Agent': this.userAgent } : { 'User-Agent': this.userAgent };
		try {
			return util.fetch(url, options, options.type || 'json');
		} catch (error) {
			Error.captureStackTrace(error);
			this.emit('error', error);
			throw error;
		}
	}

}
declare module 'klasa' {
	interface KlasaClient {
		userAgent: string;
		fetchURL(url: string, options: any): Promise<Buffer | any | string>;
	}
	interface KlasaClientOptions {
		defaultGuildSchema: any;
		permissionsLevels: any;
	}
	interface KlasaMessage {
		prompt(text: string | MessageEmbed, time?: number): Promise<KlasaMessage>;
	}
}
