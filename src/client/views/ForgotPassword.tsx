import React, { useEffect, useState } from 'react';
import { Authors } from '../../types';
import { apiService } from '../utils/api-service';

const ForgotPassword = () => {

    const [forgottenPassword, setForgottenPassword] = useState<Authors['password']>('');
    const [forgottenPassword2, setForgottenPassword2] = useState<Authors['password']>('');


    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/users', 'PUT', {})
            .then(data => setForgottenPassword(data))
            .catch((error) => console.log(error));
    }

    return (
        <div className="container">
            <form className="form-group col-md-6 bg-light">
                <label className="text-warning my-1 font-weight-bold">New Password</label>
                <input className="form-control" type="password"  value={forgottenPassword} onChange={e => setForgottenPassword(e.target.value)} />
                <label className="text-warning my-1 font-weight-bold">Validate Password</label>
                <input className="form-control" type="password"  value={forgottenPassword2} onChange={e => setForgottenPassword2(e.target.value)} />
                <div className="d-flex justify-content-center">
                    <button onClick={handleSave} className="btn btn-primary my-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword;
