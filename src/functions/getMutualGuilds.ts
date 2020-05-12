import { Function } from '@kcp/functions';
import { KlasaUser } from 'klasa';

export default class extends Function {

	async run(user: KlasaUser): Promise<number> {
		// eslint-disable-next-line max-len
		const mutualGuilds = await this.client.shard.broadcastEval(`let ids = Array.from(this.guilds.cache.keys()), count = 0; for (let id of ids) if (this.guilds.cache.get(id).members.cache.has('${user.id}')) ++count; count;`);
		return mutualGuilds.reduce((sum, val) => sum + val, 0);
	}

}
