const SearchContact = ({ searchTerm, onSearchChange }) => {
    const handleInputChange = (e) => {
        onSearchChange(e.target.value);
    }

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Buscar contato..."
                value={searchTerm}
                onChange={handleInputChange}
                className="border border-gray-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchContact;