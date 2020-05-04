import { Constants } from 'discord.js';
import { Mishify } from './lib';
/* eslint-disable */
// @ts-ignore
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android';
/* eslint-enable */

const client: Mishify = new Mishify();
/* eslint-disable no-process-env */
client.login(process.env.TOKEN);
