import { Sharder } from './lib';
import { Util } from 'discord.js';
import { config } from 'dotenv';
config();
async function main(): Promise<void> {
	/* eslint-disable no-process-env */
	const result = await Util.fetchRecommendedShards(process.env.TOKEN);
	const sharder = new Sharder(process.env.TOKEN, result);
	/* eslint-disable id-length */
	sharder.cluster.on('error', (e) => console.log(e));
	sharder.cluster.on('online', (worker) => {
		console.log(`[SHARDER] Se lanzo el worker ${worker.id}.`, { worker: worker.id });
	});
	sharder.spawn();
}

main();
