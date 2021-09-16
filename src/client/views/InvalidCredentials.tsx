import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const InvalidCredentials = () => {

    return (
        <main className="container">
            <div className="col-md-6 bg-dark p-3 border rounded">
                <div className="d-flex justify-content-center">
                    <h1 className="text-warning" >Invalid Credentials</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/login" className="btn btn-warning">Try Again</Link>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <Link to="/forgot_password" className="font-weight-light text-white">Forgot Password?</Link>
                </div>
            </div>
        </main>
    )
}

export default InvalidCredentials;
