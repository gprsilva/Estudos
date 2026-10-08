"use client";

import Link from "next/link";
import {useState, useEffect} from "react";

import ContactForm from "./componentes/ContactForm";
import ContactList from "./componentes/ContactList";



export default function Home() {
    const[ contatos , setcontatos ] = useState([])//Seta o estado inicial do array de contatos como vazio
    const[ carregando , setCarregando] = useState(true)//Seta o estado inicial do carregamento como verdadeiro
    const[ erro , setErro] = useState("")//Seta o estado inicial do erro como vazio
    const[ searchTerm , setSearchTerm] = useState("")//Seta o estado inicial do termo de pesquisa como vazio

    useEffect(()=>{
        const contatosLS = localStorage.getItem("contatos");//Recupera os contatos do localStorage
        if(contatosLS){
            setcontatos(JSON.parse(contatosLS)) //Faz a conversão de volta para objeto JavaScript
        }
        setCarregando(false)
    },[]);

    useEffect(()=>{
        if(!carregando){
            localStorage.setItem("contatos", JSON.stringify(contatos))//Faz a conversão para string JSON para armazenar no localStorage
        }},[contatos, carregando]); //Estipula que o efeito será executado sempre que houver alterações no array de contatos ou no estado de carregamento


    const handleAddContact = (contact) => {
        setcontatos((prevContatos) => [...prevContatos, contact]);//Adiciona o novo contato ao array de contatos
        console.log("Contato adicionado:", contatos);
    }

    const handleDeleteContact = (id) => {
        setcontatos((prevContatos) => prevContatos.filter((contato) => contato.id !== id));//Remove o contato com o id correspondente do array de contatos 
        console.log("Contato excluído:", id);
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <header className="border-b border-gray-200 bg-white shadow-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                    {/* Identidade */}
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

                    {/* Navegação */}
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

                        <Link href="/contatosLS"
                            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                        >
                            Contatos LS
                        </Link>
                    </nav>
                </div>
            </header>
            <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
                <div className="flex justify-center">
                    <ContactForm onAddContact={handleAddContact} />
                </div>
                <div className="flex justify-center">
                    <ContactList contatos={contatos} searchTerm={searchTerm} onSearchChange={setSearchTerm} onDeleteContact={handleDeleteContact} carregando={carregando} />
                </div>
            </section>
        </main>
    )

}