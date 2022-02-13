import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";
import firebase from "../config";

export default class ClientColetion implements ClientRepository {

    #converter = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                ages: client.ages,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const data = snapshot.data(options)
            return new Client(data.name, data.ages, snapshot.id)
        }
    };

    async save(client: Client): Promise<Client> {
        if (client?.id) {
            await this.coletion().doc(client.id).set(client)
            return client
        } else {
            const docRef = await this.coletion().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    };

    async deleted(client: Client): Promise<void> {
        return this.coletion().doc(client.id).delete()
    };

    async getAll(): Promise<Client[]> {
        const query = await this.coletion().get()
        return query.docs.map(doc => doc.data()) ?? []
    };

    private coletion() {
        return firebase
            .firestore().collection('clients')
            .withConverter(this.#converter)
    };
};