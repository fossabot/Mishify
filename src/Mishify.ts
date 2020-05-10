/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { BaseCluster } from 'kurasuta';

export default class extends BaseCluster {

	protected launch(): void | Promise<void> {
		// @ts-ignore
		this.client.login(this.manager.token);
	}

}
