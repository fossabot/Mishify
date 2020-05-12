/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Command, util } from '../../../lib';
import { CommandStore, KlasaMessage } from 'klasa';
import { MessageEmbed } from 'discord.js';
export default class extends Command {

	constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			name: 'joinimage',
			aliases: ['join_image'],
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
				if (['info', 'on', 'off'].includes(action) || arg) return arg;
			});
	}

	public async info(message: KlasaMessage): Promise<void> {
		const { settings } = message.guild;
		const embed = new MessageEmbed()
			.setTitle('Bienvenida')
			.addField('Uso', message.language.get('COMMAND_JOINIMAGE_USAGE', [settings.get('prefix')]));
		await message.send(embed);
	}

	public async message(message: KlasaMessage): Promise<void> {
		message.send('message');
	}

	public async background(message: KlasaMessage): Promise<void> {
		message.send('background');
	}

	// eslint-disable-next-line consistent-return
	public async color(message: KlasaMessage, [value, color]: [string, string]): Promise<any> {
		if (!value) return message.send(`⚠ | **${message.language.get('COMMAND_JOINIMAGE_NOVALUE')}**`);
		if (!color) return message.reply('color invalido');
		const { settings } = message.guild;
		value = value.toUpperCase();
		color = color.toUpperCase();
		if (this.parseOptions(value) && this.parseColor(color)) {
			await settings.update(`join.${this.parseOptions(value)}`, this.parseColor(color));
		} else {
			message.send('aqui se enviara un texto cuando no se cumple la condicional');
		}
	}
	public async on(message: KlasaMessage): Promise<void> {
		const { settings } = message.guild;
		await settings.update('join.enabled', true).then(() => message.send(`✅ **| ${message.language.get('COMMAND_JOINIMAGE_ENABLED')}**`));
	}

	public async off(message: KlasaMessage): Promise<void> {
		const { settings } = message.guild;
		await settings.update('join.enabled', false).then(() => message.send(`✅ **| ${message.language.get('COMMAND_JOINIMAGE_DISABLED')}**`));
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
			case 'RANDOM': return util.getRandomColor();
			case 'DEFAULT': return '#ffffff';
			default:
				if (/^#?[0-9a-f]{6}$/i.test(color)) return color;
				return null;
		}
	}

}

