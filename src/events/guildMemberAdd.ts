import { EventStore, Event } from 'klasa';
import { GuildMember } from 'discord.js';

export default class extends Event {

	constructor(store: EventStore, file: string[], directory: string) {
		super(store, file, directory, {
			name: 'guildMemberAdd',
			enabled: true,
			event: 'guildMemberAdd',
			once: false
		});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	async run(member: GuildMember) {
		if (member.guild.id === '696492359004979281') {
			member.roles.add('696492359004979287');
		}
	}

}
