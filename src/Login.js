import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then( auth => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then( auth => {
            history.push('/')

        })
        .catch(e => alert(e.message))

    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={ event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange ={ event => setPassword(event.target.value)}/>

                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>

                <p>By singing-in you agree you are dumb.</p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
