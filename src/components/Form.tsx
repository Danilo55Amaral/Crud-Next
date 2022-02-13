import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    canceled?: () => void
    alterClient?: (client: Client) => void
};

export default function Form(props: FormProps) {
    const id = props.client?.id;
    const [name, setName] = useState(props.client?.name ?? '');
    const [ages, setAges] = useState(props.client?.ages ?? 0);

    return (
        <div>
            {id ? (
                <Input
                    readOnly
                    text="Código"
                    value={id}
                    className="mb-5"
                />
            ) : false}

            <Input
                text="Nome"
                value={name}
                onChange={setName}
                className="mb-5"
            />
            <Input
                text="Idade"
                type="number"
                value={ages}
                onChange={setAges}
            />
            <div className="flex justify-end mt-7">
                <Button className="mr-2"
                    onClick={() => props.alterClient?.(new Client(name, +ages, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.canceled}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
};