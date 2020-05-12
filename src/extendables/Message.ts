/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TextChannel, MessageEmbed } from 'discord.js';
import { Extendable, ExtendableStore, Language, KlasaUser, KlasaMessage } from 'klasa';

export default class extends Extendable {

	public channel: TextChannel;
	public author: KlasaUser;
	public language: Language;

	constructor(store: ExtendableStore, file: string[], directory: string) {
		super(store, file, directory, {
			appliesTo: [KlasaMessage]
		});
	}

	public async prompt(textOrEmbed: string | MessageEmbed, time = 30000) {
		const message = await this.channel.send(textOrEmbed);
		const responses = await this.channel.awaitMessages(msg => msg.author === this.author, { time, max: 1 });
		message.delete();
		if (responses.size === 0) throw this.language.get('MESSAGE_PROMPT_TIMEOUT');
		return responses.first();
	}


}
