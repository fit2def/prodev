import React, { Component } from 'react';

class Login extends Component {
    state = {
        authedUser: '',
        password: ''
    };

    textChange(property, text) {
        this.setState({
            ...this.state,
            [property]: text
        });
    }

    submit(e) {
        e.preventDefault();
        const { login } = this.props;
        login(this.state);
    }


    render() {
        return (
            <div className="Login">
                <form onSubmit={e => this.submit(e)}> 
                    <label>
                        Name
                    <input onChange={e => this.textChange('authedUser', e.target.value)} />
                    </label>
                    <label>
                        password
                    <input onChange={e => this.textChange('password', e.target.value)} type="password" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;