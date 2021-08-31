import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from './Alert';

function LoginForm({ loginUser }) {
    const history= useHistory();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState();

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await loginUser(formData);
        if(result.success) {
            history.push('/companies');
        } else {
            setFormErrors(result.errors);
        }
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(loginData => ({ ...loginData, [name]: value }));
    }

    return (
        <div className='LoginForm'>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input name='username' value={formData.username} onChange={handleChange} required />
                
                <label>password</label>
                <input name='password' value={formData.password} onChange={handleChange} required />

                {formErrors.length 
                    ? <Alert messages={formErrors} />
                    : null}

                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default LoginForm;