import Client from "../core/Client";

interface TableProps {
    clients: Client[]
};

export default function Table(props: TableProps) {

    function headerRender() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    };

    function dataRender() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.ages}</td>
                </tr>
            )
        })
    };

    return (
        <table>
            <thead>
                {headerRender()}
            </thead>
            <tbody>
                {dataRender()}
            </tbody>
        </table>
    )
};