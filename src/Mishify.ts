/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { BaseCluster } from 'kurasuta';

export default class extends BaseCluster {

	protected launch(): void | Promise<void> {
		// eslint-disable-next-line no-process-env
		// @ts-ignore
		this.client.login(this.manager.token);
	}

}
