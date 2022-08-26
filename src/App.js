import React from "react";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            result: ''
        }
    }

    onInputChanged(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login() {
        const { username, password } = this.state
        if (username === 'admin' && password === '123') {
            this.setState({ result: 'Login válido!'})
        } else {
            this.setState({ result: 'Login inválido!'})
        }
    }

    render() {
        return (
            <div>
                Usuário: <br />
                <input type="text" name="username"
                    onChange={(event) => this.onInputChanged(event)} /> 
                
                <br />

                Senha: <br />
                <input type="password" name="password"
                    onChange={(event) => this.onInputChanged(event)} /> 

                <br />
                <input type="button" value="Entrar"
                    onClick={() => this.login()} />

                <br />
                
                {this.state.result}
            </div>
        )
    }
}

export default App;
