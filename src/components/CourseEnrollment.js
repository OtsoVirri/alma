import { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';

function CourseEnrollment({courseId, courseName, startDate, onAddEnrollment, userId}) {

    // Modal toggler
    const [toggleModal, setToggleModal] = useState(false);
    const modalToggler = () => {
        setToggleModal((prev) => !prev);
    };

    const [submitting, setSubmitting] = useState(false);
    
    function submitEnrollment() {
        setSubmitting(true);
        let timestamp = new Date();
        let enrollmentObject = {userId, courseId, timestamp};
        onAddEnrollment(enrollmentObject);
        setTimeout(() => {
            setSubmitting(false);
            modalToggler();
        }, 1000)
    }
 
    return (
        <>
            <Button variant="success" onClick={modalToggler}>Ilmoittaudu</Button>
            <Modal show={toggleModal} onHide={modalToggler}>
                <Modal.Header closeButton>Ilmoittaudu kurssille</Modal.Header>
                <Modal.Body style={{textAlign: 'center'}}>
                    {submitting && <div className="loader-gif">Ilmoittaudutaan oppimaan</div>}
                    <p>Olet ilmoittautumassa <span style={{fontWeight: '700'}}>{startDate}</span> alkavalle kurssille <span style={{fontWeight: '700'}}>{courseName}</span></p>
                    <Button variant="danger" style={{margin: '15px 5px 0px'}} onClick={modalToggler}>Peruuta</Button>
                    <Button variant="success" style={{margin: '15px 5px 0px'}} onClick={submitEnrollment}>Vahvista</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CourseEnrollment;
