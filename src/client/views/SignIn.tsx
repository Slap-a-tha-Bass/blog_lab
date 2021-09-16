import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { generateHash } from '../../server/utils/passwords';
import { apiService } from '../utils/api-service';


const SignIn = () => {
    const history = useHistory();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // const hashedPassword = generateHash(password);
        apiService('/auth/register', 'POST', { email, password })
        .then(data => {
            setEmail('')
            setPassword('');
        })
        .catch(() => history.push('/invalid'))
    }
    return (
        <div className="container">
            <h3 className="text-primary m-2">New User</h3>
            <form className="form-group col-md-6 bg-light">
                <label className="text-warning my-1 font-weight-bold">Email</label>
                <input className="form-control" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label className="text-warning my-1 font-weight-bold">Password</label>
                <input className="form-control" type="password" autoComplete="current-password" value={password} onChange={e => setPassword((e.target.value))} />
                <div className="d-flex justify-content-center">
                    <button onClick={handleLogin} className="btn btn-primary my-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
