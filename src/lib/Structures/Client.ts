import { Client, Collection, ClientOptions } from "discord.js";

export default class MishifyClient extends Client {
    public events: Collection<string, any>

    constructor(options: ClientOptions) {
        super(options);
        this.events = new Collection<string, any>();
    }
};