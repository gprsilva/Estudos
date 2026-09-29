"use client";

import {
    Card,
    ListaItens,
    BotaoAcao,
    ListaObj,
    Badge,
    CardHeader,
    CardBody
} from "./components/Aula01";

const nomes = ["João", "Maria", "Pedro", "Ana", "Carlos"];

const alunos = [
    { id: 1, nome: "Paula" },
    { id: 2, nome: "Rafael" },
    { id: 3, nome: "Nina" },
];

const contatos = [
    { id: 1, nome: "Paula" },
    { id: 2, nome: "Rafael" },
    { id: 3, nome: "Nina" },
    { id: 4, nome: "Carlos" },
    { id: 5, nome: "João" },
    { id: 6, nome: "Maria" },
];

export default function Home() {
    function acao() {
        alert("Olá");
    }

    return (
        <main className="min-h-screen bg-gray-50">

            {/* HEADER */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-6xl px-6 py-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Caderno de Estudos
                    </p>

                    <h1 className="text-3xl font-bold text-gray-900">
                        React + Next.js
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Exercícios práticos da apostila
                    </p>
                </div>
            </header>


            {/* AULA 01 */}
            <section className="mx-auto max-w-6xl px-6 py-10">

                {/* TÍTULO DA AULA */}
                <div className="mb-8">
                    <div className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        Aula 01
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">
                        Componentes e Props
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Exercícios básicos de criação e reutilização de componentes.
                    </p>
                </div>

                {/* COMPONENTES */}
                <div className="space-y-8">
                    {/* CARD */}
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">01. Card</h3>
                        <Card>
                            <h4 className="mb-2 text-xl font-bold">Hello, Next.js!</h4>
                            <p className="text-gray-600">This is a simple card component.</p>
                        </Card>
                    </section>

                    {/* LISTA DE NOMES */}
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">02. Lista de itens</h3>
                        <ListaItens nomes={nomes} />
                    </section>

                    {/* BOTÃO */}
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">03. Botão com ação</h3>
                        <BotaoAcao onAcao={acao}>Clique aqui!</BotaoAcao>
                    </section>

                    {/* LISTA DE OBJETOS */}
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800"> 04. Lista de objetos</h3>
                        <ListaObj ListaObj={alunos} />
                    </section>

                    {/* BADGES */}
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">05. Badge</h3>
                        <div className="flex flex-wrap gap-3">
                            <Badge tipo="success">OK</Badge>
                            <Badge tipo="warning">Atenção</Badge>
                            <Badge tipo="info">Info</Badge>
                        </div>
                    </section>

                    {/*Desafio*/}
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">06. Desafio</h3>
                        <div className="">
                          <Card className="">
                            <CardHeader ><h1 className="text-[24px] font-semibold text-gray-800">Lista de Contatos</h1></CardHeader>
                            <CardBody nomes={contatos}/>
                          </Card>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}