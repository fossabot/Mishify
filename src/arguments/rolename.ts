import { Argument, util, KlasaGuild, KlasaMessage, Possible } from 'klasa';
import { Role } from 'discord.js';
const ROLE_REGEXP = Argument.regex.role;
export default class extends Argument {

	role: any;

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	async run(arg: string, possible: Possible, msg: KlasaMessage) {
		if (!msg.guild) return this.role(arg, possible, msg);
		const resRole = this.resolveRole(arg, msg.guild);
		if (resRole) return resRole;

		const results = [];
		const reg = new RegExp(util.regExpEsc(arg), 'i');
		for (const role of msg.guild.roles.cache.values()) if (reg.test(role.name)) results.push(role);

		let querySearch;
		if (results.length > 0) {
			const regWord = new RegExp(`\\b${util.regExpEsc(arg)}\\b`, 'i');
			const filtered = results.filter(role => regWord.test(role.name));
			querySearch = filtered.length > 0 ? filtered : results;
		} else {
			querySearch = results;
		}

		switch (querySearch.length) {
			case 0: throw `${possible.name} debe ser un nombre válido, ID o mención`;
			case 1: return querySearch[0];
			default: throw `**Found multiple matches:** \`${querySearch.map(role => role.name).join('`, `')}\``;
		}
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	resolveRole(query: string | Role, guild: KlasaGuild) {
		if (query instanceof Role) return guild.roles.cache.has(query.id) ? query : null;
		if (typeof query === 'string' && ROLE_REGEXP.test(query)) return guild.roles.cache.get(ROLE_REGEXP.exec(query)[1]);
		return null;
	}

}
