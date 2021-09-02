import React, { useState, useContext } from 'react';
import JoblyApi from './api';
import UserContext from './UserContext';
import Alert from './Alert';


function Profile() {
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName, 
        email: currentUser.email,
        password: ''
    });

    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);

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
        setSaveConfirmed(true);

        setCurrentUser(updatedUser);
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(f => ({...f, [name]: value}));
        setFormErrors([]);
    }

    return (
        <div className='Profile'>
            <h3>Profile</h3>
            <form>
                <label>Username</label>
                <p name='username'>{formData.username}</p> />

                <label>First Name</label>
                <input name='firstName' value={formData.firstName} onChange={handleChange} />

                <label>Last Name</label>
                <input name='lastName' value={formData.lastName} onChange={handleChange} />

                <label>Email</label>
                <input name='email' value={formData.email} onChange={handleChange} />

                <label>Confirm Password to Make Changes:</label>
                <input name='password' value={formData.password} onChange={handleChange} />

                {formErrors.length 
                    ? <Alert messages={formErrors} />
                    : null}

                {saveConfirmed
                    ? <Alert messasges={['Profile Updated!']} />
                    : null}
                
                <button onClick={handleSubmit}>Submit</button>
                
            </form>
        </div>
    )
}

export default Profile;