import { CommandStore, Command } from 'klasa';


export default class MishifyCommand extends Command {

	public premiumOnly: boolean
	constructor(store: CommandStore, file: string[], directory: string, { premiumOnly = false, ...options }) {
		super(store, file, directory, options);
		this.premiumOnly = premiumOnly;
	}


}
