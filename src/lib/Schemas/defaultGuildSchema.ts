import { KlasaClient } from 'klasa';

export default KlasaClient.defaultGuildSchema.add('roles', roles => roles
	.add('autoroles', 'role', { array: true, configurable: false })
	.add('autobotroles', 'role', { array: true, configurable: false })
	.add('admin', 'role', { configurable: false })
	.add('mod', 'role', { configurable: false })
	.add('staff', 'role', { configurable: false }))
	.add('toggles', toggles => toggles
		.add('autobotroles', 'boolean', { configurable: false, default: false }));
