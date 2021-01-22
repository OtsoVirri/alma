import {Container} from 'react-bootstrap';
import CourseList from '../components/TeacherOpenCourses';
import AddCourse from '../components/AddCourse';

function CoursePageTeacher({ user, courses, feedbacks, onAddCourse, onDeleteCourse }) {

    return (
        <Container className="coursePage-wrapper">
            <div className="row">
                <div className="col-sm-12 col-md-9">
                    <h3>Omat aktiiviset kurssit</h3>
                    <p>Listalla näkyy tulevat ja meneillään olevat kurssit. Menneitä kursseja voit tarkastella käyttäjävalikon kautta.</p>
                </div>
                <div className="col-sm-12 col-md-3 addCourse-container">
                    <AddCourse user={user} onAddCourse={onAddCourse} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <CourseList user={user} courses={courses} feedbacks={feedbacks} onAddCourse={onAddCourse} />
                </div>
            </div>
        </Container>
    );
}


export default CoursePageTeacher;
