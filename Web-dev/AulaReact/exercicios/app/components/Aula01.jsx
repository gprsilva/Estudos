export function Card({ children }) {
    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white p-6 text-gray-800 shadow-sm">
            {children}
        </div>
    );
}

export function ListaItens({ nomes }) {
    return (
        <ul className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
            {nomes.map((nome, index) => (
                <li
                    key={index}
                    className="border-b border-gray-200 px-4 py-3 last:border-b-0"
                >
                    Olá, {nome}!
                </li>
            ))}
        </ul>
    );
}

export function BotaoAcao({ onAcao, children }) {
    return (
        <button
            onClick={onAcao}
            className="rounded-lg bg-red-500 px-5 py-2.5 font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
            {children}
        </button>
    );
}

export function ListaObj({ ListaObj }) {
    return (
        <ol className="w-full space-y-2">
            {ListaObj.map((obj) => (
                <li key={obj.id}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-3"
                >
                    {obj.nome}
                </li>
            ))}
        </ol>
    );
}

export function Badge({ tipo = "info", children }) {
    const estilos = {
        success:"rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700",
        warning:"rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700",
        info: "rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700",
    };

    return (
        <span className={estilos[tipo]}>
            {children}
        </span>
    );
}


export function CardHeader({children}){
    return(
        <div>{children}</div>
    );
}

export function CardBody({nomes,children}){
    return(
        <div className="w-[50%] space-y-2">
            {nomes.map(n=><div key={n.id} className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <span className="font-medium text-gray-800">{n.nome}</span>
                <div className="flex gap-2">
                    <button className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-600">
                        Editar
                    </button>
                    <button className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600">
                        Excluir
                    </button>
                </div>
                </div>)}
        </div>

    );
}