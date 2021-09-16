import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Authors } from '../../types';
import { apiService, TOKEN_KEY } from '../utils/api-service';

const Login = (props: LoginProps) => {

    const history = useHistory();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email, password })
        .then(token => {
            localStorage.setItem(TOKEN_KEY, token);
            history.push('/');
        })
        .catch(() => history.push('/invalid'))
    }

    return (
        <div className="container">
            <h3 className="text-primary m-2">Existing User</h3>
            <form className="form-group col-md-6 bg-light">
                <label className="text-warning my-1 font-weight-bold">Email</label>
                <input className="form-control" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label className="text-warning my-1 font-weight-bold">Password</label>
                <input className="form-control" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
                <div className="d-flex justify-content-center">
                    <button onClick={handleLogin} className="btn btn-primary my-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

interface LoginProps {}

export default Login;
