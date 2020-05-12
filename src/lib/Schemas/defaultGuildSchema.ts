import { KlasaClient } from 'klasa';

export default KlasaClient.defaultGuildSchema.add('roles', roles => roles
	.add('autobotroles', 'role', { array: true, configurable: false })
	.add('autoroles', 'role', { array: true, configurable: false })
	.add('admin', 'role', { configurable: false })
	.add('mod', 'role', { configurable: false })
	.add('staff', 'role', { configurable: false }))
	.add('join', folder => folder
		.add('enabled', 'boolean', { default: false, configurable: false })
		.add('channel', 'textchannel', { configurable: false })
		.add('description', 'string', { configurable: false })
		.add('welcomeColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('messageColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('circleColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('usernameColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('message', 'string', { configurable: false }))
	.add('leave', folder => folder
		.add('enabled', 'boolean', { default: false, configurable: false })
		.add('channel', 'textchannel', { configurable: false })
		.add('background', 'url', { configurable: false })
		.add('leaveColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('messageColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('circleColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('usernameColor', 'color', { default: '#FFFFFF', configurable: false })
		.add('message', 'string', { configurable: false }));
