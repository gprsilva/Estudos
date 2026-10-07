"use client";
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ContactDetailPage = () => {
  const params = useParams();           // { id: "1234567890" }
  const router = useRouter();           // para navegar programaticamente
  const searchParams = useSearchParams(); // ?nome=João&email=...

  // Reconstrói o objeto contato a partir dos query parameters
  const contact = {
    id: parseInt(params.id),
    nome: searchParams.get('nome'),
    email: searchParams.get('email'),
    telefone: searchParams.get('telefone'),
    avatar: searchParams.get('avatar'),
  };

  return (
  <main className="min-h-screen bg-gray-50">
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Caderno de Estudos</p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">Detalhes do contato</h1>

        <p className="mt-1 text-sm text-gray-500">Visualização das informações do contato</p>
      </div>
    </header>

    <section className="mx-auto max-w-2xl px-6 py-10">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center border-b border-gray-100 pb-6 text-center">
          <img src={contact.avatar} alt={`Avatar de ${contact.nome}`} className="h-32 w-32 rounded-full shadow-md"/>
            <h2 className="mt-5 text-2xl font-bold text-gray-900">{contact.nome}</h2>

            <p className="mt-1 text-sm text-gray-500">ID: {contact.id}</p>
        </div>

        <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">E-mail</p>

              <p className="mt-1 text-gray-800">{contact.email}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Telefone</p>

              <p className="mt-1 text-gray-800">{contact.telefone}</p>
            </div>

        </div>

        <div className="mt-6">
          <Link href="/contatos" className="inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Voltar para contatos
          </Link>
        </div>
      </div>
    </section>
  </main>
      );
}

export default ContactDetailPage;