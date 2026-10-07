import Link from "next/link";


const ContactCard = ({ contato, onDelete }) => {

    const handleDelete = () => {
        onDelete(contato.id);
    };
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(contato.nome)}`;

    const detailUrl = `/contatos/details/${contato.id}`+
        '?nome=' + encodeURIComponent(contato.nome) +
        '&email=' + encodeURIComponent(contato.email) +
        '&telefone=' + encodeURIComponent(contato.telefone) +
        '&avatar=' + encodeURIComponent(avatarUrl);

    

    return (       
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                    <img src={avatarUrl} alt={`Avatar de ${contato.nome}`} className="h-12 w-12 rounded-full" />
                </div>

                <Link href={detailUrl} className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-gray-900">{contato.nome}</h3>
                </Link>
            </div>

            <div className="mt-5 space-y-3">
                <div className="rounded-lg bg-gray-50 px-3 py-2.5">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">E-mail</p>

                    <p className="mt-0.5 truncate text-sm font-medium text-gray-700">{contato.email}</p>
                </div>

                <div className="rounded-lg bg-gray-50 px-3 py-2.5">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Telefone</p>

                    <p className="mt-0.5 text-sm font-medium text-gray-700">{contato.telefone}</p>
                </div>
            </div>

            {/* Ações */}
            <div className="mt-5 border-t border-gray-100 pt-4">
                <button onClick={handleDelete}
                    className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:border-red-300 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                >
                    Excluir contato
                </button>
            </div>
        </div>
    );
};

export default ContactCard;

