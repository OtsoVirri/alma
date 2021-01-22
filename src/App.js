import React, { useState, useEffect } from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { get } from 'jquery';

function App() {

  const[user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {isLoggedIn: false});

  const handleLogin = async (email, password) => {
    const res = await get(`http://localhost:5000/users?email=${email}`);
    if (res.length === 0) {
      return alert('Antamallasi sähköpostiosoitteella ei löytynyt käyttäjätunnusta. Ole hyvä ja luo käyttäjä ALMA-palveluun.');
    } else if (res.length > 1) {
      console.log('Error - Multiple users with same email.');
      return alert('Sattui odottamaton virhe. Ole hyvä ja ota yhteyttä palvelun ylläpitoon.');
    } else if (res[0].password !== password) {
      return alert('Käyttäjätunnus ja salasana eivät täsmää.');
    } else {
      res[0].isLoggedIn = true;
      setUser(res[0]);
      localStorage.setItem('user', JSON.stringify(res[0]));
      console.log('Successful login. Updating user.');
    }
  }

  const handleLogout = () => {
    let clearUser = {
      isLoggedIn: false,
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      userType: ''
    }
    localStorage.removeItem('user');
    setUser(clearUser);
    alert('Olet nyt kirjautunut ulos palvelusta.');
    console.log('User logged out.');
  }

  const [courses, setCourses] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [users, setUsers] = useState([]);
  const [userEnrollments, setUserEnrollments] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const coursesFromServer = await fetchCourses();
      setCourses(coursesFromServer)
    }
    getCourses();

    const getFeedbacks = async () => {
      const feedbacksFromServer = await fetchFeedbacks();
      setFeedbacks(feedbacksFromServer)
    }
    getFeedbacks();

    const getEnrollments = async () => {
      const enrollmentsFromServer = await fetchEnrollments();
      setEnrollments(enrollmentsFromServer)
    }
    getEnrollments();

    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer)
    }
    getUsers();

    const getUserEnrollments = async () => {
      const userEnrollmentsFromServer = await fetchUserEnrollments();
      setUserEnrollments(userEnrollmentsFromServer)
    }
    getUserEnrollments();

  }, [user])

  const fetchCourses = async () => {
    const res = await fetch('http://localhost:5000/courses');
    const data = await res.json();
    return data
  }

  const fetchFeedbacks = async () => {
    const res = await fetch('http://localhost:5000/feedbacks');
    const data = await res.json();
    return data
  }

  const fetchEnrollments = async () => {
    const res = await fetch('http://localhost:5000/enrollments');
    const data = await res.json();
    return data
  }

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    return data
  }

  const fetchUserEnrollments = async () => {
    const res = await fetch(`http://localhost:5000/enrollments?userId=${user.id}`);
    const data = await res.json();
    return data
  }

  // Add a course
  const addCourse = async (course) => {
    const res = await fetch('http://localhost:5000/courses', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(course)
    })
    const data = await res.json()
    setCourses([...courses, data]) 
  }

  // Add a feedback
  const addFeedback = async (feedback) => {
    const res = await fetch('http://localhost:5000/feedbacks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
    const data = await res.json()
    setFeedbacks([...feedbacks, data])
  }

  // Add an enrollment
  const addEnrollment = async (enrollment) => {
    const res = await fetch('http://localhost:5000/enrollments', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(enrollment)
    })
    const data = await res.json()
    setEnrollments([...enrollments, data])
  }

  // Add a user
  const addUser = async (user) => {
    const userExists = await get(`http://localhost:5000/users?email=${user.email}`);
    if (userExists.length > 0)
      return alert('Tällä sähköpostiosoitteella on jo luotu käyttäjätunnus.');
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await res.json()
    setUsers([...users, data])
  }

  return (
    
  <BrowserRouter>
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/"
          render={(props) => (
            <HomePage {...props} user={user} courses={courses} feedbacks={feedbacks} onAddCourse={addCourse} onAddFeedback={addFeedback} onAddEnrollment={addEnrollment} onAddUser={addUser} onLogin={handleLogin} userEnrollments={userEnrollments} />
          )}
        />
        <Route exact path="/profile"
          render={(props) => (
            <ProfilePage {...props} user={user} courses={courses} feedbacks={feedbacks} userEnrollments={userEnrollments} onAddFeedback={addFeedback} />
          )}
        />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>

  );
}

export default App;