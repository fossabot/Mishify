import { Constants } from 'discord.js';
import { Mishify } from './lib';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android';

/* eslint-disable no-process-env */
const client: Mishify = new Mishify({
	prefix: process.env.PREFIX,
	language: process.env.LANGUAGE,
	commandEditing: true,
	providers: {
		mongodb: {
			db: 'mishify',
			connectionString: process.env.MONGO_URL,
			options: {}
		},
		default: 'mongodb'
	},
	preserveSettings: false,
	console: {
		timestamps: true,
		utc: false,
		colors: {
			debug: { time: { background: 'magenta' } },
			error: { time: { background: 'red' } },
			log: { time: { background: 'blue' } },
			verbose: { time: { text: 'gray' } },
			warn: { time: { background: 'lightyellow', text: 'black' } },
			wtf: { message: { text: 'red' }, time: { background: 'red' } }
		}
	},
	production: false,
	prefixCaseInsensitive: true,
	messageSweepInterval: 480,
	messageCacheLifetime: 120,

	commandMessageLifetime: 120,
	owners: ['497061687820812288'],
	aliasFunctions: { returnMethod: 'run', prefix: 'funcs', enabled: true }
});
/* eslint-disable no-process-env */
client.login(process.env.TOKEN);
