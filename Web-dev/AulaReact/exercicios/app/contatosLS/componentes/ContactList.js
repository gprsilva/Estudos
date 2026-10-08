import SearchContact from "./SearchContact";
import ContactCard from "./ContactCard";
import Loader from "./Loader";

const ContactList = ({ contatos, searchTerm, onSearchChange, onDeleteContact , carregando}) => {
    const filteredContacts = contatos.filter(contact =>
        contact.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    
    return(
        <div className="w-full">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">Meus contatos</h2>
                </div>
                <SearchContact searchTerm={searchTerm} onSearchChange={onSearchChange} />
            </div>

            {carregando ? (
                <Loader />
            ) : filteredContacts.length === 0 ? (
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
                    {filteredContacts.map((contato) => (
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

}

export default ContactList;