/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Command } from '../../../lib';
import { MessageEmbed, Role } from 'discord.js';
import { CommandStore, KlasaMessage } from 'klasa';
export default class extends Command {

	constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			name: 'autobotrole',
			aliases: ['auto_bot_role'],
			permissionLevel: 6,
			subcommands: true,
			premiumOnly: false,
			enabled: true,
			runIn: ['text'],
			cooldown: 10,
			deletable: false,
			description: 'Configura los autoroles para los bots',
			usage: '<add|remove|list:default> [Rol:rolename]',
			usageDelim: ' '
		});
	}


	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async list(message: KlasaMessage, [role]: Role[]) {
		let roles: any[] = message.guild.settings.get('roles.autobotroles');
		roles = [...new Set(roles.filter(rol => message.guild.roles.cache.get(rol)))];
		let roleNames: string[] = [];
		for (let i = 0; i < roles.length; i++) {
			roleNames.push(message.guild.roles.cache.get(roles[i]).toString());
		}
		roleNames = roleNames.map((rol, number) => `**${number + 1}.** ${rol}`);
		const embed = new MessageEmbed()
			.setTitle('<:checklist:708924470303129671> Lista de autoroles')
			.setDescription(roleNames.join('\n'));
		message.send(embed);
	}

	// eslint-disable-next-line consistent-return
	public async add(message: KlasaMessage, [rol]: Role[]) {
		if (!(rol instanceof Role)) return message.send(`❌ **${message.language.get('INVALID_ROLE')}**`);
		if (message.guild.settings.get('roles.autobotroles').indexOf(rol.id) === -1) {
			return message.guild.settings.update('roles.autobotroles', rol, message.guild).then(() => {
				message.send(`✅ **${message.language.get('BOT_ROLE_ADD_SUCCESS', [rol.name])}**`);
			});
		} else {
			return message.send(`⚠ **${message.language.get('BOT_ROLE_IS_ALREADY_ADDED', [rol.name])}**`);
		}
	}

	// eslint-disable-next-line consistent-return
	public async remove(message: KlasaMessage, [rol]: Role[]) {
		if (!(rol instanceof Role)) return message.send(`❌ **${message.language.get('INVALID_ROLE')}**`);
		if (message.guild.settings.get('roles.autobotroles').indexOf(rol.id) !== -1) {
			return message.guild.settings.update('roles.autobotroles', rol, message.guild).then(() => {
				message.send(`✅ **${message.language.get('BOT_ROLE_REMOVE_SUCCESS', [rol.name])}**`);
			});
		} else {
			return message.send(`⚠ **${message.language.get('BOT_ROLE_NOT_ADDED', [rol.name])}**`);
		}
	}

}
