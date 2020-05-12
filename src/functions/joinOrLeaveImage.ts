import { Function } from '@kcp/functions';
import { resolve, join } from 'path';
import { Canvas } from 'canvas-constructor';

Canvas.registerFont(resolve(join(__dirname, '..', '..', 'assets', 'fonts', 'FredokaOne-Regular.ttf')), 'FredokaOne Regular');


export default class extends Function {

	async run(avataURL: string, memberTag: string, type: string, { background, welcomeColor, circleColor, usernameColor }): Promise<Buffer> {
		if (type === 'join') {
			type = 'BIENVENID@';
		} else if (type === 'leave') {
			type = 'ADIÓS';
		}
		const avatar = await this.client.fetchURL(avataURL, { type: 'buffer', query: { size: '1024' } }).catch(() => null);
		const _background = await this.client.fetchURL(background, { type: 'buffer' }).catch(() => null);
		const canvasImage = new Canvas(1100, 500);
		if (_background instanceof Buffer) {
			canvasImage.addImage(_background, 0, 0);
		}
		canvasImage.addCircularImage(avatar, 550, 130, 110)
			.beginPath()
			.arc(550, 130, 110, 0, 2 * Math.PI, false)
			.setLineWidth(10)
			.setStroke(circleColor)
			.stroke()
			.save()
			.restore()
			.setShadowColor('rgba(22, 22, 22, 1)')
			.setShadowOffsetY(5)
			.setShadowBlur(10)
			.setTextAlign('center')
			.setColor(welcomeColor)
			.setTextFont('50pt FredokaOne Regular')
			.addText(type, 550, 300)
			.setTextAlign('center')
			.setColor(usernameColor)
			.setTextFont('50pt FredokaOne Regular')
			.addResponsiveText(memberTag, 550, 375, 600);
		return canvasImage.toBufferAsync();
	}

}
