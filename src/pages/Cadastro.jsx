import { useState } from 'react';

import "../styles/Cadastro.css";

import NavBar from "../components/NavBar";

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            nome: '',
            email: '',
            senha: ''
        });
    };

    return (
        <div>
            <NavBar/>
            <main>
                <h1>Cadastro</h1>
                <form className='cadastro-form'
                      onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" 
                            id="nome" 
                            placeholder="Nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required />
                        </div>
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                               id="email" 
                               placeholder="Email"
                               value={formData.email}
                               onChange={handleChange}
                               required />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" 
                               id="senha" 
                               placeholder="Senha"
                               value={formData.senha}
                               onChange={handleChange}
                               required />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                <p>Já tem uma conta? <a href="/login">Faça login</a></p>
            </main>
        </div>
    );
}
