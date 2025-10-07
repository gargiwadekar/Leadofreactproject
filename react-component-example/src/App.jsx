// ...existing code...
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [courses, setCourses] = useState([
    {
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlQUimGwFJVeTSmpO4h50mlmBdKUEDz2FsQ&s',
      courseName: 'MERN stack',
      description:
        'The MERN stack is a popular collection of JavaScript-based technologies for building full-stack web applications, standing for MongoDB, Express.js, React, and Node.js. MongoDB is the database, Express.js is the web framework for the backend, React is the frontend library for user interfaces, and Node.js is the JavaScript runtime environment for the server-side',
    },
    {
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a4aEZvqbdvim8klThQPdFsH0eiDnHtVI3g&s',
      courseName: 'Node JS',
      description:
        'Node.js lets developers use JavaScript to write command line tools and server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user',
    },
    {
      imageURL: '',
      courseName: 'Full stack',
      description:
        'Full stack refers to the complete software development process, encompassing both the front-end (user-facing interface) and the back-end (server-side logic, databases, and APIs) of an application. A full-stack developer is a versatile professional who can work on all parts of the development cycle, from designing the user experience to managing the underlying server infrastructure',
    },
    {
      imageURL: '',
      courseName: 'React JS',
      description: '',
    },
  ])

  return (
    <>
      <div className="container">
        <h2>Courses list</h2>
        <div className="card-container">
          {courses.map((course, index) => (
            <Card
              key={index}
              imageURL={course.imageURL}
              courseName={course.courseName}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}
// ...existing code...
export default App