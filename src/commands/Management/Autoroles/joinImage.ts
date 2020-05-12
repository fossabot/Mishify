/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Command, util as MishifyUtil } from '../../../lib';
import { CommandStore, KlasaMessage, util } from 'klasa';
import { MessageEmbed } from 'discord.js';
export default class extends Command {

	constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			name: 'join_image',
			aliases: ['join_img'],
			permissionLevel: 6,
			subcommands: true,
			premiumOnly: false,
			enabled: true,
			runIn: ['text'],
			cooldown: 10,
			deletable: false,
			description: 'Configura los autoroles para los bots',
			usage: '<message|background|color|on|off|info:default> (key:key) [...]',
			usageDelim: ' '
		});

		this
			// eslint-disable-next-line consistent-return
			.createCustomResolver('key', (arg, possible, message, [action]) => {
				if (['on', 'off'].includes(action) || arg) return arg;
			});
	}

	public async info(message: KlasaMessage): Promise<void> {
		const { settings } = message.guild;
		const infoEmbed = new MessageEmbed()
			.setAuthor('Imagen de bienvenida', this.client.user.avatarURL({ format: 'png', size: 1024 }))
			.setColor('RANDOM')
			.addField('Uso', message.language.get('COMMAND_JOINIMAGE_USAGE', [settings.get('prefix')]));
		await message.send(infoEmbed);
	}

	public async message(message: KlasaMessage): Promise<void> {
		message.send('message');
	}

	public async background(message: KlasaMessage): Promise<void> {
		message.send('background');
	}

	// eslint-disable-next-line consistent-return
	public async color(message: KlasaMessage, [prop, color]: [string, string]): Promise<any> {
		const { settings } = message.guild;
		prop = prop ? prop.toUpperCase() : null;
		color = color ? color.toUpperCase() : null;
		if (!prop) return message.sendLocale('COMMAND_JOINIMAGE_NOPROP');
		if (this.parseOptions(prop) && this.parseColor(color)) {
			await settings.update(`join.${this.parseOptions(prop)}`, this.parseColor(color)).then(() => message.sendLocale('COMMAND_JOINIMG_UPDATECOLOR_SUCCESS'));
		} else {
			message.send(new MessageEmbed()
				.setAuthor('Imagen de bienvenida', this.client.user.avatarURL({ format: 'png', size: 1024 }))
				.setColor('RANDOM')
				.addField('Uso', message.language.get('COMMAND_JOINIMAGE_USAGE', [settings.get('prefix')])));
		}
	}
	public async on(message: KlasaMessage): Promise<void> {
		const { settings } = message.guild;
		await settings.update('join.enabled', true).then(() => message.sendLocale('COMMAND_JOINIMAGE_ENABLED'));
	}

	public async off(message: KlasaMessage): Promise<void> {
		const { settings } = message.guild;
		await settings.update('join.enabled', false).then(() => message.send('COMMAND_JOINIMAGE_DISABLED'));
	}
	public parseOptions(value: string): string | null {
		switch (value) {
			case 'CIRCLE': return 'circleColor';
			case 'MESSAGE': return 'messageColor';
			case 'WELCOME': return 'welcomeColor';
			case 'USERNAME': return 'usernameColor';
			default: return null;
		}
	}

	public parseColor(color: string) {
		switch (color) {
			case 'RANDOM': return MishifyUtil.getRandomColor();
			case 'DEFAULT': return '#ffffff';
			default:
				if (/^#?[0-9a-f]{6}$/i.test(color)) return color;
				return null;
		}
	}

}

