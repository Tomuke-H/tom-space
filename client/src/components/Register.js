import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const {handleRegister, loading} = useContext(AuthContext);
    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('123456')
    const [passwordConfirmation, setPasswordConfirmation] = useState('123456')
    const [name, setName] = useState('Tester Testerson')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister({email, password, name }, history)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                value={name}
                label="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <Form.Input 
                value={email}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input 
                value={password}
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Input 
                value={passwordConfirmation}
                label="Confirm Password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <Button loading={loading} disabled={loading}>Register</Button>
        </Form>
    );
}

export default Register;