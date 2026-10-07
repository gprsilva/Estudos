"use client";

import ContactCard from "./ContactCard";

const ContactList = ({ contatos, onDeleteContact }) => {
    return (
        <div className="w-full">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">Meus contatos</h2>
                </div>
            </div>

            {contatos.length === 0 ? (
                <div className="flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
                    <div>
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl">
                            👤
                        </div>
                        <h3 className="font-semibold text-gray-800"> Nenhum contato encontrado</h3>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {contatos.map((contato) => (
                        <ContactCard
                            key={contato.id}
                            contato={contato}
                            onDelete={onDeleteContact}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default ContactList;