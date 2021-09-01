import React, { useState, useContext } from 'react';
import JoblyApi from './api';
import UserContext from './UserContext';


function Profile() {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName, 
        email: currentUser.email,
        password: ''
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(evt) {
        evt.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        }

        let username= formData.username;
        let updatedUser;

        try {
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (errors) {
            setFormErrors(errors);
            return;
        }

        setFormData(f => ({...f, password: ''}));
        setFormErrors([]);

        setCurrentUser(updatedUser);

    }

}

export default Profile;