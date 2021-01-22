import { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';

function RegisterUser({onAddUser}) {

    // Modal toggler
    const [toggleModal, setToggleModal] = useState(false);
    const modalToggler = () => {
        setToggleModal((prev) => !prev);
    };

    // Form values
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState('student');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    // Form validation and submission
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmedPassword) {
            alert('Antamasi salasanat eivät täsmää.');
            return;
        }
        setSubmitting(true);
        let userObject = {email, firstName, lastName, userType, password};
        onAddUser(userObject);
        setTimeout(() => {
            setSubmitting(false);
            modalToggler();
            setEmail('');
            setFirstName('');
            setLastName('');
            setUserType('student');
            setPassword('');
            setConfirmedPassword('');
        }, 1000)
    }
 
    return (
        <>
            <h3>Uusi käyttäjä?</h3>
            <p>Etkö ole vielä rekisteröitynyt ALMA-palvelun käyttäjäksi?
                <br></br>
                Voit tehdä niin alla olevasta painikkeesta.
            </p>
            <Button variant="default" onClick={modalToggler}>Luo käyttäjä</Button>
            <Modal show={toggleModal} onHide={modalToggler}>
                <Modal.Header closeButton>Luo ALMA-käyttäjä</Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Käyttäjätunnus</Form.Label>
                            <Form.Control required type="email" placeholder="esimerkki@email.fi" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                            <Form.Text className="text-muted">Sähköposti toimii käyttäjätunnuksenasi palvelussa, eikä sitä voi vaihtaa myöhemmin.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>Etunimi</Form.Label>
                            <Form.Control required type="text" placeholder="Maija" value={firstName} onChange={(e) => setFirstName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Sukunimi</Form.Label>
                            <Form.Control required type="text" placeholder="Mehiläinen" value={lastName} onChange={(e) => setLastName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formUserType">
                            <Form.Label>Olen</Form.Label>
                            <Form.Control required type="text" value={userType} onChange={(e) => setUserType(e.target.value)} as="select">
                                <option value='student'>Oppilas</option>
                                <option value='teacher'>Opettaja</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Salasana</Form.Label>
                            <Form.Control required type="password" placeholder="Luo salasana" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formConfirmedPassword">
                            <Form.Label>Vahvista salasana</Form.Label>
                            <Form.Control required type="password" placeholder="Kirjoita salasana uudelleen" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button variant="danger" type="reset" onClick={modalToggler} style={{marginRight: '10px'}}><i className="fas fa-ban" style={{marginRight: '10px'}}></i>Peruuta</Button>
                        <Button variant="success" type="submit"><i className="fa fa-plus" style={{marginRight: '10px'}}></i>Luo käyttäjä</Button>
                        {submitting && <div className="loader-gif">Luodaan käyttäjää...</div>}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RegisterUser;
