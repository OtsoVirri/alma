import {Container} from 'react-bootstrap';
import OpenCourseList from '../components/StudentOpenCourses';
import EnrolledCourseList from '../components/StudentEnrolledCourses';

function CoursePage({ user, courses, userEnrollments, onAddFeedback, onAddEnrollment }) {

    return (
        <Container className="coursePage-wrapper">
            <div className="row">
                <div className="col-12">
                    <h3>Ilmoittaudu kursseille</h3>
                    <p>Alla olevalta listalta löydät kaikki aktiiviset vapaasti valittavat kurssit.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{marginBottom: '60px'}}>
                    <OpenCourseList user={user} courses={courses} userEnrollments={userEnrollments} onAddFeedback={onAddFeedback} onAddEnrollment={onAddEnrollment} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Omat kurssit</h3>
                    <p>Näihin käynnissä oleviin ja tuleviin kursseihin olet jo ilmoittautunut mukaan opiskelemaan.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{marginBottom: '60px'}}>
                    <EnrolledCourseList user={user} courses={courses} userEnrollments={userEnrollments} onAddFeedback={onAddFeedback} />
                </div>
            </div>
        </Container>
    );
}


export default CoursePage;
