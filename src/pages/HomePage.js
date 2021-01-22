
import LoginPage from './LoginPage';
import CoursePageStudent from './CoursePageStudent';
import CoursePageTeacher from './CoursePageTeacher';

function HomePage({user, courses, feedbacks, userEnrollments, onAddFeedback, onAddEnrollment, onAddCourse, onDeleteCourse, onAddUser, onLogin}) {

    return (
        <>
            {!user.isLoggedIn && <LoginPage onLogin={onLogin} onAddUser={onAddUser} />}
            {user.isLoggedIn && user.userType === 'student' && <CoursePageStudent user={user} courses={courses} userEnrollments={userEnrollments} onAddFeedback={onAddFeedback} onAddEnrollment={onAddEnrollment} />}
            {user.isLoggedIn && user.userType === 'teacher' && <CoursePageTeacher user={user} courses={courses} feedbacks={feedbacks} onAddCourse={onAddCourse} onDeleteCourse={onDeleteCourse} />}
        </>
    );
}


export default HomePage;
