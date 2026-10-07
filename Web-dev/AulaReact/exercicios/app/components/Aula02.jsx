"use client";

import { useState, useEffect } from "react";

export function Contador(){

    const[valor,setValor] = useState(0);

    return(
        <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800">Valor: {valor}</h2>

                <div className="flex gap-3">
                    <button onClick={() => setValor(prev => prev + 1)}
                        className="rounded-lg bg-green-500 px-5 py-2 text-lg font-bold text-white transition hover:bg-green-600">
                        +1</button>

                    <button onClick={() => setValor(prev => Math.max(prev - 1, 0))}
                        className="rounded-lg bg-red-500 px-5 py-2 text-lg font-bold text-white transition hover:bg-red-600">
                        -1</button>
                </div>
            </div>
    )
}


export function Relogio(){
    const [hora,setHora] = useState(null);

    useEffect(() =>{
        setHora(new Date());
        const id = setInterval(() => {
            setHora(new Date());
        }, 1000);
        return ()=> clearInterval(id)
    } 
        ,[])

    return (
        <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-sm font-medium text-gray-500">Horário atual</p>

            <p className="text-3xl font-bold text-gray-800">{hora ? hora.toLocaleTimeString() : "Carregando..."}</p>
        </div>)
}


export function Texto(){
    const[texto,setTexto] = useState('')

    return(
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Campo de texto
        </h2>

        <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            type="text"
            placeholder="Digite alguma coisa..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <p className="break-words text-gray-700">{texto || ""}</p>
        </div>

        <p className="mt-3 text-sm text-gray-500">Caracteres:{" "}<span className="font-semibold text-gray-800">{texto.length}</span></p>
    </div>
    )


}

export function ToDo(){
    const [lista,setLista] = useState([])
    const [texto, setTexto] = useState('')
    const [feito,setFeito] = useState(false)

    function Adicionar(){
        const t = texto.trim()
        if(!t) return;
        const novaTarefa = {
            id: Date.now(),
            texto: t,
            feito: false
        }
        setLista(prev => [...prev,novaTarefa])
        setTexto('')
    }

    function handleDelete(id) {
        setLista(prev => prev.filter(item => item.id !== id));
        
    }

    function AlternarTarefa(id) {
        setLista(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, feito: !item.feito }
                    : item
            )
        )
    }

    return(
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex gap-3">
                <input
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    type="text"
                    placeholder="Digite alguma coisa..."
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

                <button
                    onClick={Adicionar}
                    className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600"
                >
                    Adicionar
                </button>
            </div>

            {/* Lista */}
            <div className="mt-6">
                <h1 className="mb-4 text-xl font-bold text-gray-800">
                    Lista To-do
                </h1>

                <div className="space-y-2">
                    {lista.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                        >
                            <input
                                checked={item.feito}
                                onChange={() => AlternarTarefa(item.id)}
                                type="checkbox"
                                className="h-4 w-4 cursor-pointer accent-blue-500"
                            />

                            <span
                                className={`text-gray-700 ${
                                    item.feito
                                        ? "text-gray-400 line-through"
                                        : ""
                                }`}
                            >
                                {item.texto}
                            </span>
                            <button onClick={() => handleDelete(item.id)} className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600">
                                Excluir
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Timer(){
    const [segundos, setSegundos] = useState(0);
    const [rodando, setRodando] = useState(false);

    useEffect(() => {
        let id;
        if (rodando){
            id = setInterval(()=>{
                setSegundos(prev => prev + 1)
            }, 1000)
        }
        return () => {
            clearInterval(id);
        }
    })

    return(
        <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">Segundos: {segundos}</h2>
            <button onClick={() => setRodando(prev => !prev)}
                className={`rounded-lg px-5 py-2 text-lg font-bold text-white transition ${rodando ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                {rodando ? 'Parar' : 'Iniciar'}
            </button>
            <button onClick={() => setSegundos(0)}
                className="rounded-lg bg-gray-500 px-5 py-2 text-lg font-bold text-white transition hover:bg-gray-600">
                Resetar</button>    
        </div>
    )
}

export function Switcher(){
    const [tema, setTema] = useState('light')

    useEffect(() => {
        const salvo = localStorage.getItem('tema')
        if (salvo) {
            setTema(salvo)
        }
    }, [])

    useEffect(() => {
        document.body.classList.toggle('dark', tema === 'dark')
        localStorage.setItem('tema', tema)
        return () => {
            document.body.classList.remove('dark')
        }
    }, [tema])


    return (
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="font-medium text-gray-700">
                Tema: {tema === 'light' ? 'Claro' : 'Escuro'}
            </span>

            <button
                onClick={() => setTema(prev => prev === 'light' ? 'dark' : 'light')}
                className={`rounded-lg px-5 py-2 text-lg font-bold text-white transition ${
                    tema === 'light'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-red-500 hover:bg-red-600'
                }`}
            >
                {tema === 'light' ? 'Claro' : 'Escuro'}
            </button>
        </div>
    )

}

export function Api(){
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        let isMounted = true;
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(r => r.json())
            .then(json => { if (isMounted) {setDados(json);setCarregando(false)}})
            .catch(erro => { if (isMounted) {setErro(erro.message);setCarregando(false)}});
    }, [])

    if (carregando) {
        return <p>Carregando...</p>;
    }
    if (erro) {
        return <p>Erro: {erro}</p>;
    }

    return (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-2">
            {dados.map((d) => (<div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 w-full" key={d.id}>{d.name}</div>))}
        </div>
    );
}