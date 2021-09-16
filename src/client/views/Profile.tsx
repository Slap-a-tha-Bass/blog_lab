import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { TOKEN_KEY } from '../utils/api-service';

const Profile = () => {

    const history = useHistory();

    useEffect(() => {
        const TOKEN = localStorage.getItem(TOKEN_KEY);

        if(!TOKEN){
            history.push('/login')
        }
    }, [])

    return (
        <div>
            <h1>PROFILE Page</h1>
        </div>
    )
}

export default Profile;
