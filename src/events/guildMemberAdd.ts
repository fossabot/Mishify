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
		if (member.guild.settings.get('toggles.autobotroles')) {
			if (!member.user.bot) {
				const roles = await member.guild.settings.get('roles.autoroles');
				member.roles.add(roles).catch(() => null);
			} else {
				const roles = await member.guild.settings.get('roles.autobotroles');
				member.roles.add(roles).catch(() => null);
			}
		}
	}

}
