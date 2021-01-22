import LoggedOut from '../components/LoggedOut';
import Profile from '../components/Profile';
import CompletedCourseList from '../components/StudentCompletedCourses';
import CourseHistoryList from '../components/TeacherPastCourses';
import { Container } from 'react-bootstrap';

function ProfilePage({ user, courses, feedbacks, userEnrollments, onAddFeedback }) {

    return (
        <>
        {!user.isLoggedIn && <LoggedOut />}
        {user.isLoggedIn &&
            <Container className="coursePage-wrapper">
                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <Profile user={user} />
                    </div>
                    <div className="col-md-12 col-lg-8">
                    {user.userType === 'student' && <CompletedCourseList user={user} courses={courses} userEnrollments={userEnrollments} onAddFeedback={onAddFeedback} />}
                    {user.userType === 'teacher' && <CourseHistoryList user={user} courses={courses} feedbacks={feedbacks} />}
                    </div>
                </div>
            </Container>
        }
        </>
    );
}

export default ProfilePage;
