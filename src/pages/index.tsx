import Head from "next/head";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const {
    client,
    clients,
    selectedClient,
    saveClient,
    newClient,
    deletedClient,
    tableVisible,
    displayTable,
  } = useClients();

  return (
    <div>
      <Head>
        <title>Crud Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}>
        <Layout title="Cadastro Simples">
          {tableVisible ? (
            <>
              <div className="flex justify-end">
                <Button className="mb-4"
                  onClick={newClient}>
                  Novo Cliente
                </Button>
              </div>

              <Table clients={clients}
                selectedClient={selectedClient}
                deletedClient={deletedClient}
              />
            </>
          ) : (
            <Form
              client={client}
              alterClient={saveClient}
              canceled={displayTable}
            />
          )}
        </Layout>
      </div>
    </div>
  )
};
