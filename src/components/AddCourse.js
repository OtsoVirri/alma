import { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap';

function AddCourse({ user, onAddCourse}) {

    // Modal toggler
    const [toggleModal, setToggleModal] = useState(false);
    const modalToggler = () => {
        setToggleModal((prev) => !prev);
    };

    // Form values
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState('');
    const [literature, setLiterature] = useState('');
    const [courseType, setCourseType] = useState('');
    const [points, setPoints] = useState(3);
    const teacher = user.firstName + ' ' + user.lastName;
    const userId = user.id;

    // Form validation and submission
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        let courseObject = {name, description, teacher, userId, startDate, endDate, literature, courseType, points};
        setSubmitting(true);
        onAddCourse(courseObject);
        setTimeout(() => {
            setSubmitting(false);
            modalToggler();
            setName('');
            setDescription('');
            setStartDate('');
            setEndDate('');
            setLiterature('');
            setCourseType('');
            setPoints(3);
        }, 1000)
    }

    return (
        <>
            <Button variant="success" onClick={modalToggler}><i className="fa fa-plus" style={{marginRight: '10px'}}></i> Lisää kurssi</Button>
            <Modal show={toggleModal} onHide={modalToggler}>
                <Modal.Header closeButton>Lisää uusi kurssi</Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Kurssin nimi</Form.Label>
                            <Form.Control required type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Kurssin kuvaus</Form.Label>
                            <Form.Control required as="textarea" rows={3} type="text" placeholder="" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formStartDate">
                            <Form.Label>Alkamispäivämäärä</Form.Label>
                            <Form.Control required type="date" placeholder="" value={startDate} onChange={(e) => setStartDate(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEndDate">
                            <Form.Label>Päättymispäivämäärä</Form.Label>
                            <Form.Control required type="date" placeholder="" value={endDate} onChange={(e) => setEndDate(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formCourseType">
                            <Form.Label>Kurssin tyyppi</Form.Label>
                            <Form.Control required type="text" placeholder="" value={courseType} onChange={(e) => setCourseType(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formLiterature">
                            <Form.Label>Kurssikirjallisuus</Form.Label>
                            <Form.Control required as="textarea" rows={3} type="text" placeholder="" value={literature} onChange={(e) => setLiterature(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formPoints">
                            <Form.Label>Opintopisteet</Form.Label>
                            <Form.Control required type="number" placeholder="3" value={points} onChange={(e) => setPoints(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button variant="danger" type="reset" style={{marginRight: '10px'}} onClick={modalToggler}><i className="fas fa-ban" style={{marginRight: '10px'}}></i>Peruuta</Button>
                        <Button variant="success" type="submit"><i className="fa fa-plus" style={{marginRight: '10px'}}></i>Lisää kurssi</Button>
                        {submitting && <div className="loader-gif">Luodaan uutta kurssia...</div>}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddCourse;
