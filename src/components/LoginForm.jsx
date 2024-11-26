import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password
            });
            const token = response.data.token;
            setMessage('Inicio de Sesión Exitoso');
            localStorage.setItem('token', token);
        } catch (error) {
            setMessage('Error en el Inicio de sesión: ' + error.response?.data?.message);
        }
    };

    return (
        <div>
            <h2>Inicio de Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Inicio</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};