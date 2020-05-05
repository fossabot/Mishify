import { GuildMember, Guild, User, Message} from "discord.js";
import { Possible, Argument, util } from "klasa";

const USER_REGEXP = Argument.regex.userOrMember;

function resolveMember(query: GuildMember | User | string, guild: Guild) {
  console.log(query)
	if (query instanceof GuildMember) return query;
	if (query instanceof User) return guild.members.fetch(query.id);
	if (typeof query === 'string') {
		if (USER_REGEXP.test(query)) return guild.members.fetch(USER_REGEXP.exec(query)[1]).catch(() => null);
		if (/\w{1,32}#\d{4}/.test(query)) {
      console.log(/\w{1,32}#\d{4}/.test(query))
			const res = guild.members.cache.find(member => member.user.tag.toLowerCase() === query.toLowerCase());
			return res || null;
		}
	}
	return null;
}

export default class extends Argument {

	async run(arg:any, possible:Possible, msg:Message) {
		if (!msg.guild) throw 'Este comando solo se puede usar en un servidor.';
		const resUser = await resolveMember(arg, msg.guild);
		if (resUser) return resUser;

		const results = [];
		const reg = new RegExp(util.regExpEsc(arg), 'i');
		for (const member of msg.guild.members.cache.values()) {
			if (reg.test(member.user.username)) results.push(member);
		}

		let querySearch;
		if (results.length > 0) {
			const regWord = new RegExp(`\\b${util.regExpEsc(arg)}\\b`, 'i');
			const filtered = results.filter(member => regWord.test(member.user.username));
			querySearch = filtered.length > 0 ? filtered : results;
		} else {
			querySearch = results;
		}

		switch (querySearch.length) {
			case 0: throw `${possible.name} Debe ser un nombre válido, ID o mención`;
			case 1: return querySearch[0];
			default: throw `Se encontraron múltiples coincidencias: \`${querySearch.map(member => member.user.tag).join('`, `')}\``;
		}
	}

};