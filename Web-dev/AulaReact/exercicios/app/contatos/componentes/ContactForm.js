"use client";

import { useState, useEffect } from "react";

const ContactForm = ({ onAddContact }) => {
    const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
    const [error, setError] = useState("");

    const validate = (form) => {
        const errors = {};

        if (!form.nome.trim() || form.nome.trim().length < 2) {
            errors.nome = "Nome deve ter ao menos 2 caracteres";
        }
        if (!form.email.trim()) {
            errors.email = "Email é obrigatório";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
            errors.email = "Email inválido";
        }
        if (form.telefone && !/^[\d\s()\-+]+$/.test(form.telefone)) {
            errors.telefone = "Telefone contém caracteres inválidos";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const erros = validate(form);
        if (Object.keys(erros).length > 0) {
            setError(erros);
            return;
        }
        onAddContact({ ...form , id: Date.now() });
        setForm({ nome: "", email: "", telefone: "" });
        setError("");
        
    };

    const handleClear = () => {
        setForm({ nome: "", email: "", telefone: "" });
        setError("");
    }

    return (
        <form onSubmit={handleSubmit}
            className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
        >
            {/* Cabeçalho do formulário */}
            <div className="mb-3">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Novo contato
                </h2>

            </div>

            {/* Campos */}
            <div className="space-y-4">

                <div>
                    <label
                        htmlFor="nome"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                        Nome
                    </label>

                    <input
                        id="nome"
                        type="text"
                        placeholder="Digite o nome"
                        value={form.nome}
                        onChange={handleChange}
                        name="nome"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                    {error.nome && <p className="mt-1 text-sm text-red-600">{error.nome}</p>}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                        E-mail
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Digite o e-mail"
                        value={form.email}
                        onChange={handleChange}
                        name="email"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                    {error.email && <p className="mt-1 text-sm text-red-600">{error.email}</p>}
                </div>

                <div>
                    <label
                        htmlFor="telefone"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                        Telefone
                    </label>

                    <input
                        id="telefone"
                        type="tel"
                        placeholder="Digite o telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        name="telefone"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                    {error.telefone && <p className="mt-1 text-sm text-red-600">{error.telefone}</p>}
                </div>

            </div>

            {/* Botões */}
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                <button
                    type="button"
                    onClick={handleClear}
                    className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    Limpar campos
                </button>

                <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                    Adicionar contato
                </button>

            </div>
        </form>
    );


}

export default ContactForm;