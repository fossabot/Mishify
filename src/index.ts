/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-process-env */
import { ShardingManager, SharderEvents } from 'kurasuta';
import { join } from 'path';
import { Constants } from 'discord.js';
import { config } from 'dotenv';
import { Mishify } from './lib';
// @ts-ignore
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android';


config();


const sharder: ShardingManager = new ShardingManager(join(__dirname, 'Mishify'), {
	token: process.env.TOKEN,
	client: Mishify,
	clientOptions: {
		// @ts-ignore
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
	},
	shardCount: 1,
	ipcSocket: 9454,
	timeout: 60000
});

sharder.spawn();
sharder.on(SharderEvents.MESSAGE, message => {
	console.log(message);
});
