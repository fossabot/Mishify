import MishifyClient from "./Client";

interface IMishifyCommand {
    name: string
    description?: string
    category?: string
    nsfw?: boolean
    cooldown?: number
    args?: any[]
}

export default class MishifyCommand {
    public name: string
    public description?: string
    public category?: string
    public nsfw?: boolean | null
    public cooldown?: number | null
    public args?: any[] | []
    constructor(client: MishifyClient, options: IMishifyCommand) {
        this.name = options.name.toLowerCase();
        this.description = options.description || "No se ha proporcionado una descripción";
        this.category = options.category || "Otros";
        this.nsfw = options.nsfw || null;
        this.cooldown = options.cooldown || null;
        this.args = options.args || [];
    }

    async run(): Promise<any> { throw new Error(`No se ha imprementado run en ${this.name}`) }

    toJSON(): object {
        return {
            name: this.name,
            description: this.description,
            category: this.category,
            nsfw: this.nsfw,
            cooldown: this.cooldown,
            args: this.args
        };
    }
}