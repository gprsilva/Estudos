const Loader = () => {
    return (
        <div role="status" className="flex min-h-48 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
            <span className="sr-only">Carregando...</span>
        </div>
    );
};

export default Loader;