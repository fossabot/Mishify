import { KlasaClient } from 'klasa';

export default KlasaClient.defaultGuildSchema.add('roles', roles => roles
	.add('auto_roles', 'role', { array: true, configurable: false })
	.add('bot_roles', 'role', { array: true, configurable: false })
	.add('admin', 'role', { configurable: false })
	.add('mod', 'role', { configurable: false })
	.add('staff', 'role', { configurable: false }))
	.add('toggles', toggles => toggles
		.add('bot_roles', 'boolean', { configurable: false, default: true })
		.add('bot_roles', 'boolean', { configurable: false, default: false }));
