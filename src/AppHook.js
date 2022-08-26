import { useState } from "react"

const AppHook = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')

    const login = () => {
        if (username === 'admin' && password === '123') {
            setResult('Login válido!')
        } else {
            setResult('Login inválido!')
        }
    }

    return (
        <div>
            Usuário: <br />
            <input type="text" onChange={(event) => setUsername(event.target.value)} /> 
            <br />

            Senha: <br />
            <input type="password" onChange={(event) => setPassword(event.target.value)} /> 

            <br />
            <input type="button" value="Entrar" onClick={login}/>

            <br />
            
            {result}
        </div>
    )
}

export default AppHook