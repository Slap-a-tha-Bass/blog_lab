import React from 'react';
import { Redirect, Route } from 'react-router';
import { TOKEN_KEY } from '../utils/api-service';

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {

    const TOKEN = localStorage.getItem(TOKEN_KEY);

    if (!TOKEN) {
        return <Redirect to="/login" />
    } else {
        return <Route {...rest}>{children}</Route>
    }
}

interface PrivateRouteProps {
    path: string,
    exact?: boolean,
    children: React.ReactNode
}

export default PrivateRoute;
