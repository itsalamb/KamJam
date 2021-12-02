import react, { useState } from "react";
import { useHistory } from "react-router";

const Register = ({ setIsLoggedIn }) => {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resp = await fetch('/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
        const data = await resp.json()
        localStorage.setItem('token', data.token)
        console.log('registration data: ', data)

        if (data.token) {
            setIsLoggedIn(true);
            setSuccessMessage(`Welcome to KamJam ${data.name}`);

            setTimeout(() => { history.push('/') }, 1500)
        } else {
            setErrorMessage(data.message);
        }
    }
    return <>
        <h1>Create Your Account</h1>
        <div className='registerform'>
            {errorMessage ? <h4>{errorMessage}</h4> : null}
            {successMessage ? <h4>{successMessage}</h4> : null}
            <form onSubmit={handleSubmit}>
                <input type='text' required={true} placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <input type='text' required={true} placeholder='Name' value={name} onChange={(event) => setName(event.target.value)}></input>
                <input type='password' required={true} placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <button type='submit'>Create Account!</button>
            </form>
        </div>
    </>
}

export default Register