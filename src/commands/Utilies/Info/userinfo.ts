/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Command } from '../../../lib';
import { MessageEmbed } from 'discord.js';
import { CommandStore, KlasaMessage, KlasaUser } from 'klasa';
import * as moment from 'moment';
moment.locale('es');
export default class extends Command {

	public readonly status: object;
	public readonly activityTypes: object;
	constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			name: 'userinfo',
			aliases: ['user_info'],
			premiumOnly: false,
			enabled: true,
			runIn: ['text'],
			cooldown: 10,
			deletable: false,
			bucket: 1,
			description: 'Muestra la información de un usuario',
			usage: '[miembro:username]'
		});
		this.status = {
			online: '<:online_status:708834904737054730> Conectado',
			idle: '<:idle_status:708834905534103552> Ausente',
			dnd: '<:dnd_status:708834905240371238> No molestar',
			offline: '<:invisible_status:708834905437503538> Invisible'
		};
		this.activityTypes = {
			PLAYING: 'Jugando a',
			LISTENING: 'Escuchando',
			STREAMING: 'Transmitiendo',
			WATCHING: 'Viendo'
		};
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	public async run(message: KlasaMessage, [user = message.author]: [KlasaUser]) {
		const embed = new MessageEmbed()
			.setTitle(`Información del ${user.bot ? 'bot' : 'usuario'}`)
			.setColor('#2f3136')
			.addBetterField('Nombre', user.tag)
			.addBetterField('ID', user.id)
			.addBetterField('Bot', user.bot ? '✅' : '❎')
			// @ts-ignore
			.addBetterField('Servidores compartidos', await this.client.funcs.getMutualGuilds(user))
			.addBetterField('Fecha de creación', `__${moment(user.createdAt.getTime()).format('L - LTS')}__`);
		if (message.guild.members.cache.has(user.id)) {
			const guildMember = message.guild.members.cache.get(user.id);
			// eslint-disable-next-line id-length
			const roles = guildMember.roles.cache.map(r => r.name);
			embed.addBetterField('Fecha de unión', `__${moment(message.member.joinedAt.getTime()).format('L - LTS')}__`)
				.addBetterField('Estado', this.status[user.presence.status])
				.addBetterField('Apodo', guildMember.nickname ? guildMember.nickname : '-')
				.addBetterField('Roles', `${roles.length === 0 ? '-' : `${roles.length} - ${roles.join(', ')}`}`);
		}
		embed.setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }));
		return message.send(embed);
	}

}
