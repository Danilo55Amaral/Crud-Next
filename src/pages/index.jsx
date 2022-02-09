import Head from "next/head";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4'),
  ];

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
          <Table clients={clients}></Table>
        </Layout>
      </div>
    </div>
  )
};