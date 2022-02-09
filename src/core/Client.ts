export default class Client {
    #id: string
    #name: string
    #ages: number

    constructor(name: string, ages: number, id: string = null) {
        this.#name = name
        this.#ages = ages
        this.#id = id
    };

    static empty() {
        return new Client('', 0)
    };

    get id() {
        return this.#id
    };

    get name() {
        return this.#name
    };
    get ages() {
        return this.#ages
    };
};