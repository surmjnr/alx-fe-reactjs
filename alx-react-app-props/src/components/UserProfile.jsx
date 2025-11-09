import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserProfile;

