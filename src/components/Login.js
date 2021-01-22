import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

function Login({onLogin}) {

    // Form values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Form validation and submission
    const [validated, setValidated] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        if (email == '') {
            alert('Sähkpostikenttä on tyhjä.');
            return;
        } else if (password == '') {
            alert('Salasanakenttä on tyhjä.');
            return;
        }
        setSubmitting(true);
        onLogin(email, password);
        setTimeout(() => {
            setSubmitting(false);
            setEmail('');
            setPassword('');
            setValidated(false);
        }, 1000)
    }
    
    return (
        <>
            <h3>Kirjaudu sisään</h3>
            <Form noValidate validated={validated} onSubmit={handleLogin}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Käyttäjätunnus</Form.Label>
                    <Form.Control required type="email" placeholder="esimerkki@email.fi" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Salasana</Form.Label>
                    <Form.Control required type="password" placeholder="Salasana123!" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">Kirjaudu</Button>
                {submitting && <div className="loader-gif">Kirjaudutaan sisään...</div>}
            </Form>
        </>
    );
}

export default Login;
