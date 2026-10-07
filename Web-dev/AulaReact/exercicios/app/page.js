"use client";

import Link from "next/link";

import {
    Card,
    ListaItens,
    BotaoAcao,
    ListaObj,
    Badge,
    CardHeader,
    CardBody
} from "./components/Aula01";


import {Contador, Relogio, Texto, ToDo, Timer, Switcher, Api} from "./components/Aula02"

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
            <header className="border-b border-gray-200 bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                    <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                            Caderno de Estudos
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            React + Next.js
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Exercícios práticos da apostila
                        </p>
                    </div>

                    <nav className="flex items-center gap-2 rounded-xl bg-gray-100 p-1">
                        <Link href="/"
                            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                        >
                            Exercícios
                        </Link>

                        <Link href="/contatos"
                            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                        >
                            Contatos
                        </Link>
                    </nav>

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
            <section className="mx-auto max-w-6xl px-6 py-10">

                {/* TÍTULO DA AULA */}
                <div className="mb-8">
                    <div className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        Aula 02
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">
                        Estados e Hooks Básicos
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Exercícios básicos de criação e reutilização de componentes.
                    </p>
                </div>
                <div className="space-y-8">
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">01. Contador</h3>
                        <Contador/>
                    </section>
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">02. Relódio</h3>
                        <Relogio/>
                    </section>
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">03. Input</h3>
                        <Texto/>
                    </section>
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">04. Lista To-Do</h3>
                        <ToDo/>
                    </section>
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">05. Timer</h3>
                        <Timer/>
                    </section>
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">06. Switcher</h3>
                        <Switcher/>
                    </section>
                    <section>
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">07. API</h3>
                        <Api/>
                    </section>
                </div>
            </section>
            <section className="mx-auto max-w-6xl px-6 py-10">

                {/* TÍTULO DA AULA */}
                <div className="mb-8">
                    <div className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        Aula 03
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">
                        Componentização Avançada na Prática
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Exercícios básicos de criação e reutilização de componentes.
                    </p>
                </div>
                <div className="space-y-8">
                    
                </div>
            </section>
        </main>
    );
}