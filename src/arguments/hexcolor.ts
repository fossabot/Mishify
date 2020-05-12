import { Argument, Possible, KlasaMessage } from 'klasa';
import { util } from '../lib';


export default class extends Argument {

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async run(arg: string, possible: Possible, msg: KlasaMessage): Promise<any> {
		if (typeof arg === 'string') {
			if (arg === 'RANDOM') return util.getRandomColor();
			if (arg === 'DEFAULT') return '#FFFFFF';
			if (/^#?[0-9a-f]{6}$/i.test(arg)) return arg;
		}
		throw `${possible.name} debe ser un color valido`;
	}

}
