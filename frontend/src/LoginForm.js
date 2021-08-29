import React, { useState } from 'react';

function LoginForm({loginUser}) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    )};

    async function handleSubmit(evt) {
        evt.preventDefault();
        
    }
}