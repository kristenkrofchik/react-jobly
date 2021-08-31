import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from './Alert';

function SignUpForm({ signUpUser }) {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '', 
        email: ''
    });
    const [formErrors, setFormErrors] = useState();

    async function handleSubmit(evt) {
        evt.preventDefault();

        let result = await signUpUser(formData);
        if(result.success) {
            history.push('/companies');
        } else {
            setFormErrors(result.errors);
        }
    }

    async function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(d => ({...d, [name]: value}));
    }

    return (
        <div className='SignUpForm'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input name='username' value={formData.username} onChange={handleChange} />

                <label>Password</label>
                <input name='password' value={formData.password} onChange={handleChange} />

                <label>First Name</label>
                <input name='firstName' value={formData.firstName} onChange={handleChange} />

                <label>Last Name</label>
                <input name='lastName' value={formData.lastName} onChange={handleChange} />

                <label>Email</label>
                <input name='email' value={formData.email} onChange={handleChange} />

                {formErrors.length 
                    ? <Alert messages={formErrors} />
                    : null}

                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}

export default SignUpForm;