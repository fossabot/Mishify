import { Command } from '../../lib';
// import { MessageEmbed } from 'discord.js';
import { CommandStore, KlasaMessage } from 'klasa';
export default class extends Command {

	constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			name: 'userinfo',
			premiumOnly: false,
			enabled: true,
			runIn: ['text'],
			cooldown: 10,
			deletable: false,
			bucket: 1,
			description: 'Muestra la información de un usuario',
			usage: '[miembro:username]'
		});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	async run(message: KlasaMessage, [member = message.author]) {
		return message.send('en desarollo');
	}

}
