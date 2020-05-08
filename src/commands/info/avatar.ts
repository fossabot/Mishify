import { Command } from '../../lib';
import { MessageEmbed } from 'discord.js';
import { CommandStore, KlasaMessage } from 'klasa';
export default class extends Command {

	constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			name: 'avatar',
			premiumOnly: false,
			enabled: true,
			runIn: ['text'],
			cooldown: 10,
			deletable: false,
			bucket: 1,
			description: 'Muestra el avatar de un usuario',
			usage: '[miembro:username]'
		});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	async run(message: KlasaMessage, [member = message.author]) {
		const avatar = new MessageEmbed()
			.setAuthor(member.tag, member.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
			.setColor(message.member.displayColor)
			.setImage(member.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
		if (message.author !== member) {
			avatar.setFooter(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
		}
		avatar.setTimestamp(new Date());

		return message.send(avatar);
	}

}
