import { Accordion, Card, Button } from 'react-bootstrap';
import FeedbackForm from './FeedbackForm';

const StudentOpenCourses = ({ courses, userEnrollments, onAddFeedback }) => {

    const enrolled = [];
    const filteredCourses = [];
    const completion = 0;

    if (userEnrollments && userEnrollments.length > 0) {
        userEnrollments.forEach(enrollment => {
            if (enrolled.indexOf(enrollment.courseId) === -1) {
                enrolled.push(enrollment.courseId);
            }
        });
    }

    if (courses.length > 0 && enrolled.length > 0) {
        courses.forEach(course => {
            let courseEnd = new Date(course.endDate);
            let currentDate = new Date();
            if(enrolled.indexOf(course.id) !== -1 && courseEnd < currentDate) {
                filteredCourses.push(course);
            }
        });
    }

    filteredCourses.forEach(course => {
        completion = completion + parseInt(course.points);
    });

    const dateFormatter = (date) => {
        let courseDate = new Date(date);
        let day = courseDate.getDate();
        let month = courseDate.getMonth() + 1;
        let year = courseDate.getFullYear();
        if (day < 10)
            day = '0' + day + '.';
        else
            day = day + '.';
        if (month < 10 )
            month = '0' + month + '.';
        else
            month = month + '';
        return day + month + year;
    }

    return (
        <>
            <div className="completed-container">
                <h3>Kurssisuoritukset</h3>
                <p>Löydät kaikki päättyneet kurssisi tältä listalta.</p>
                <div className="completion-counter">{completion}</div>
                {filteredCourses.length === 0 && <div className="noCourses">Et ole vielä suorittanut yhtäkään kurssia loppuun.</div>}
                {filteredCourses.length > 0 &&
                <Accordion>
                {filteredCourses.map((course) => (
                    <Card key={course.id}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} className="courseList-toggle" variant="link" eventKey={course.id}>
                            <span>{course.name}</span><span className="courseList-details"><i className="fas fa-graduation-cap"></i>{course.points}OP <i className="fas fa-clock"></i>{dateFormatter(course.startDate)}</span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={course.id}>
                            <Card.Body>
                                <table className="cardBody-table">
                                    <tbody>
                                        <tr>
                                            <td><label className="strong-label">Kurssi</label></td>
                                            <td>{course.name}</td>
                                        </tr>
                                        <tr>
                                            <td><label className="strong-label">Kurssin tunnus</label></td>
                                            <td>{course.id}</td>
                                        </tr>
                                        <tr>
                                            <td><label className="strong-label">Opettaja</label></td>
                                            <td>{course.teacher}</td>
                                        </tr>
                                        <tr>
                                            <td><label className="strong-label">Alkamispäivämäärä</label> </td>
                                            <td>{dateFormatter(course.startDate)}</td>
                                        </tr>
                                        <tr>
                                            <td><label className="strong-label">Päättymispäivämäärä</label></td>
                                            <td>{dateFormatter(course.endDate)}</td>
                                        </tr>
                                        <tr>
                                            <td><label className="strong-label">Kurssikirjallisuus</label></td>
                                            <td>{course.literature}</td>
                                        </tr>
                                        <tr>
                                            <td><label className="strong-label">Kurssityyppi</label></td>
                                            <td>{course.courseType}</td>
                                        </tr>
                                        <tr>
                                            <td><label className="strong-label">Opintopisteet</label></td>
                                            <td>{course.points} OP</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="action-buttons">
                                    <FeedbackForm courseId={course.id} courseName={course.name} onAddFeedback={onAddFeedback} />
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
                </Accordion>}
            </div>
        </>
    )
}

export default StudentOpenCourses
