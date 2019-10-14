import React, { useState } from 'react'
import Api from '../../services/api'

export default function Login({ history }) {
    const [ email, setEmail ] = useState('')
    async function handleSubmit(event) {
        event.preventDefault() 
        const response = await Api.post('/sessions', { email })
        const { _id } = response.data
        localStorage.setItem('user', _id)

        history.push('/dashboard')
    }

    return (
        <>
            <p>
                Oferece <strong>spots</strong> para programadores e encontre <strong>talentos </strong> para sua enpresa!
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <button className="login" type="submit">Login</button>
            </form>
        </>
    )
}