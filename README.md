# ALMA Course Application

This project has been created with React.

ALMA is a service for students and teachers. Users can register and login to the service, review ongoing courses, leave feedback to courses, sign up for courses and create new ones.

# Scripts
Run the fake REST API on JSON-server:
npm run server

Run the application:
npm start

Production build:
npm build

# Dependencies
ALMA was created using the following depending technologies:
    bootstrap: "^4.6.0",
    jquery: "^3.5.1",
    json-server: "^0.16.3",
    node-sass: "^4.14.1",
    react: "^17.0.1",
    react-bootstrap: "^1.4.3",
    react-dom: "^17.0.1",
    react-router-dom: "^5.2.0",
    react-scripts: "4.0.1",
    web-vitals: "^0.2.4"

react-router-dom takes care of path navigation to pages in the application.
App.js renders component files from the /pages folder.
The /pages folder files have elements in the /components folder embedded in them that mostly create the content of the pages. 

Prebuild CSS files are upgraded to SASS for enabling theme variables and nesting.
Bootstrap and boostrap-react components were used as the foundation for UI styling, and then customized to fit the theme.
Most of the styling is embedded in the global App.scss file. Some components have some ad hoc inline styling.

Data requests and REST API calls were done with JSON-server (jsonplaceholder) for demo purposes.

# Application description

If there is no logged in user the service renders the LoginPage.js in the /pages folder.
Users can create a user and login on the login page.

Once a user is logged in, they are shown the main home page components depending on their role in system.

Teachers (userType teacher) are displayed the CoursePageTeacher.js page in the /pages folder as their home page.
Teachers see a list component of their own courses they are teaching and can review related feedback from the students from the list.
Teachers can also create new courses using a form.

Students (userType student) are displayed the coursePageStudent.js page in the /pages folder as their home page.
Students see a list component of available courses and can enroll to them and leave anonyme feedback to them.

Both user groups have a profile page as well that displays basic user information that cannot be modified. 

# Where's the custom code?
See folders:
/components
/pages
for custom react components.
App.js is of course also heavily customized.
App.scss has most of the custom styling for the application.
Most of the styling comes from Bootstrap and react-bootstrap
Font awesome icons are used

# How to get this project running on your localhost?

Basically you will need to install the node_modules for React app and replace the other project files with the ones in this.

Install Node.js 
Run the create react app in command line

npx create-react-app /*ProjectName*/

Install the following add-ons to the project folder

npm install react-bootstrap bootstrap
npm install node-sass
npm install --save react-router-dom
npm install json-server

Add the script "server" to the react "package.json" file for quickstarting the JSON-server on your local host:
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --watch data/db.json --port 5000"
}

Download the project files for this project. Replace the files in /src and /public project folders with the corresponding files in this project.
Add the folder /data with the included db.JSON file that serves as fake backend with the JSON-server.

Run the react app in any other port than the json-server. If localhost3000 is your default:
npm run server
npm start

Enjoy ALMA (:
