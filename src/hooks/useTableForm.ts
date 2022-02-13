import { useState } from "react";

export default function useTableForm() {
    const [visible, setVisible] = useState<'table' | 'form'>('table');

    const displayTable = () => setVisible('table');
    const displayForm = () => setVisible('form');

    return {
        formVivible: visible === 'form',
        tableVisible: visible === 'table',
        displayTable,
        displayForm,
    }
};