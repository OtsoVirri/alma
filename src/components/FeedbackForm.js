import { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';

function FeedbackForm({courseId, courseName, onAddFeedback}) {

    // Modal toggler
    const [toggleModal, setToggleModal] = useState(false);
    const modalToggler = () => {
        setToggleModal((prev) => !prev);
    };

    // Form values
    const [feedback, setFeedback] = useState('');

    // Form validation and submission
    const [validated, setValidated] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = e => {
        setSubmitting(true);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        e.preventDefault();
        let timestamp = new Date();
        let feedbackObject = {feedback, courseId, timestamp};
        onAddFeedback(feedbackObject);
        setTimeout(() => {
            setSubmitting(false);
            modalToggler();
            setFeedback('');
            setValidated(false);
        }, 1000)
    }
 
    return (
        <>
            <Button variant="default" onClick={modalToggler}>Anna palautetta</Button>
            <Modal show={toggleModal} onHide={modalToggler}>
                <Modal.Header closeButton>Palaute kurssista {courseName}</Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBody">
                            <Form.Label>Palaute</Form.Label>
                            <Form.Control required as="textarea" rows={3} type="text" placeholder="Kerro mielipiteesi kurssista tässä." value={feedback} onChange={(e) => setFeedback(e.target.value)}></Form.Control>
                            <Form.Text className="text-muted">Vain kurssin pitäjä näkee jättämäsi palautteen.</Form.Text>
                        </Form.Group>
                        <Button variant="success" type="submit">Jätä palaute</Button>
                        {submitting && <div className="loader-gif">Annetaan palautetta</div>}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FeedbackForm;
