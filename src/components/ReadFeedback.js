import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';

function Feedbacks({courseId, courseName, feedbacks}) {
    const filteredFeedbacks = [];

    if (feedbacks && feedbacks.length > 0 && courseId) {
        feedbacks.forEach(feedback => {
            if (feedback.courseId === courseId) {
                filteredFeedbacks.push(feedback);
            }
        });
    }

    // Modal toggler
    const [toggleModal, setToggleModal] = useState(false);
    const modalToggler = () => {
        setToggleModal((prev) => !prev);
    };

    return (
        <>
            {filteredFeedbacks.length > 0 && <Button variant="default" onClick={modalToggler}><i className="fa fa-comment" style={{marginRight: '10px'}}></i>Lue palautteet</Button>}
            <Modal show={toggleModal} onHide={modalToggler}>
                <Modal.Header closeButton>Kurssin {courseName} palaute</Modal.Header>
                <Modal.Body>
                    {filteredFeedbacks.map((feedback) => (
                        <div key={feedback.id} className="feedback">
                            <p>{feedback.feedback}</p>
                            <span className="text-muted">{feedback.timestamp}</span>
                        </div>
                    ))}

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Feedbacks;
