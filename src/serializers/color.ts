import { Serializer, Language} from 'klasa';


export default class extends Serializer {

	// eslint-disable-next-line consistent-return
	deserialize(data: string, piece: any, language: Language): any {
		if (/^#?[0-9a-f]{6}$/i.test(data)) return data;
		throw language.get('RESOLVER_INVALID_COLOR', piece.key);
	}

}
