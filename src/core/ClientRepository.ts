import Client from "./Client";

export default interface ClientRepository {
    save(client: Client): Promise<Client>
    deleted(client: Client): Promise<void>
    getAll(): Promise<Client[]>
};