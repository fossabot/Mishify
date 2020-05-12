/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MessageEmbed } from 'discord.js';
import { Extendable, ExtendableStore } from 'klasa';

export default class extends Extendable {

	private description: string;
	public addField: any

	constructor(store: ExtendableStore, file: string[], directory: string) {
		super(store, file, directory, {
			appliesTo: [MessageEmbed]
		});
	}

	public addBetterField(title?: string, content?: string, extraSpace = false) {
		this.description = this.description || '';
		this.description += `${extraSpace ? '\n' : ''}\n**${title}:** ${content}`;
		return this;
	}

	public addFieldDef(title?: string, content?: string) {
		title = title || '\u200B';
		content = content || '\u200B';
		return this.addField(title, content);
	}

}
declare module 'discord.js' {
	interface MessageEmbed {
		addBetterField(title?: string, content?: string, extraSpace?: boolean): this;
		addFieldDef(title?: string, content?: string): this;
	}
}
