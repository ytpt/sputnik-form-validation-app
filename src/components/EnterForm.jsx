import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

export function EnterForm({ title }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        setError('');

        if (email.trim().length === 0 || password.trim().length === 0) {
            setError('Please enter valid title');
        }
    }
    return (
        <>
            <h2>{ title }</h2>
            <form onSubmit={ submitHandler }>
                <input
                    type="text"
                    className="login-form"
                    placeholder="konst.konst.konst@yandex.ru"
                    value={email}
                    onChange={ event => setEmail(event.target.value) }
                />
                { error && <ErrorMessage error={error} /> }
                <input
                    type="text"
                    className="password-form"
                    placeholder="********"
                    value={password}
                    onChange={ event => setPassword(event.target.value) }
                />
                { error && <ErrorMessage error={error} /> }
                <button
                    type="submit"
                    className="form-btn">
                    Войти
                </button>
            </form>
        </>
    )
}