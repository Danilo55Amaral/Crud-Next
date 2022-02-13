import { useEffect, useState } from "react";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import ClientColetion from "../firebase/db/ClientColetion";
import useTableForm from "./useTableForm";

export default function useClients() {
    const repo: ClientRepository = new ClientColetion();

    const { tableVisible, displayTable, displayForm } = useTableForm();

    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(getAll, []);

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            displayTable
        })
    };

    function selectedClient(client: Client) {
        setClient(client)
        displayForm
    };

    async function deletedClient(client: Client) {
        await repo.deleted(client)
        getAll()
    };

    function newClient() {
        setClient(Client.empty())
        displayForm
    };

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    };

    return {
        tableVisible,
        displayTable,
        client,
        clients,
        newClient,
        saveClient,
        deletedClient,
        selectedClient,
        getAll
    };

};