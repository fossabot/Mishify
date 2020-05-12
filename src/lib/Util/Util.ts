import fetch, { RequestInit } from 'node-fetch';
import { URLSearchParams } from 'url';


// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface fetchOptions extends RequestInit {
	query?: any;
	type?: any;

}

export default class Util {

	public static async fetch(url: string, options?: fetchOptions, type?: string | 'result' | 'buffer' | 'json' | 'text'): Promise<Buffer | any | string> {
		if (typeof options === 'undefined') {
			options = {};
			type = 'json';
			console.log('json 1');
		} else if (typeof options === 'string') {
			type = options;
			options = {};
		} else if (typeof type === 'undefined') {
			console.log('json 2');
			type = 'json';
		}
		console.log(type);
		const query = new URLSearchParams(options.query || {});

		url = `${url}?${query}`;

		const result = await fetch(url, options);
		if (!result.ok) throw new Error(`${url} - ${result.status}`);

		switch (type) {
			case 'result': return result;
			case 'buffer': return result.buffer();
			case 'json': return result.json();
			case 'text': return result.text();
			default: throw new Error(`Tipo desconocido ${type}`);
		}
	}

	public static getRandomColor(): string {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

}
