import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [languages] = useState(['HTML & CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Java'])
  const [search, setSearch] = useState('')

  const [courses] = useState([
    { languageURL: 'https://th.bing.com/th/id/OIP.OUA5w44w-XKomWGAb4Uz1AHaEC?w=300&h=180', courseName: 'MERN stack', price: 2000, active: true },
    { languageURL: 'https://th.bing.com/th/id/OIP.PH9nPXJVyro_6MkBTS7CxAHaFj?w=229&h=180', courseName: 'Full stack', price: 2000, active: false },
    { languageURL: 'https://th.bing.com/th/id/OIP.RbyFiUTtyFq40cMUd3HoKQHaE8?w=272&h=181', courseName: 'Java stack', price: 2000, active: false },
    { languageURL: 'https://th.bing.com/th/id/OIP.1eX4kYkYk1c1J2j9b0z3YQHaEK?w=305&h=180', courseName: 'Python Django', price: 2000, active: true },
  ])

  const [students] = useState([
    { rollno: 1, fullname: 'Gargi Wadekar', department: 'Computer Engineering', cgpa: 9.5, mobileno: 9876543210 },
    { rollno: 2, fullname: 'Shweta Ghadage', department: 'ENTC Engineering', cgpa: 8.1, mobileno: 9566501234 },
    { rollno: 3, fullname: 'Sneha Patil', department: 'Information Technology', cgpa: 8.7, mobileno: 9123456780 },
     { rollno: 4, fullname: 'shravani tathe', department: 'Computer Engineering', cgpa: 9.5, mobileno: 9876543210 },
    { rollno: 5, fullname: 'rutuja shendage', department: 'ENTC Engineering', cgpa: 8.1, mobileno: 9566501234 },
    { rollno: 6, fullname: 'veena kulkarni', department: 'Information Technology', cgpa: 8.7, mobileno: 9123456780 },
     { rollno: 7, fullname: 'sankalp vasekar', department: 'Computer Engineering', cgpa: 9.5, mobileno: 9876543210 },
    { rollno: 8, fullname: 'sakshi khilare', department: 'ENTC Engineering', cgpa: 8.1, mobileno: 9566501234 },
    { rollno: 9, fullname: 'ishwari bole', department: 'Information Technology', cgpa: 8.7, mobileno: 9123456780 },
     { rollno: 10, fullname: 'sarvesh kulkarni', department: 'Computer Engineering', cgpa: 9.5, mobileno: 9876543210 },
    
  ])

  const filteredStudents = students.filter((s) => s.fullname.toLowerCase().includes(search.trim().toLowerCase()))

  const [registerform, setRegisterform] = useState({ fullname: '', department: '', cgpa: '', mobileno: '' })
  const [submitted, setSubmitted] = useState(null)

  function handleRegisterChange(e) {
    const { name, value } = e.target
    setRegisterform((p) => ({ ...p, [name]: value }))
  }

  function handleRegisterSubmit(e) {
    e.preventDefault()
    setSubmitted(registerform)
    setRegisterform({ fullname: '', department: '', cgpa: '', mobileno: '' })
  }

  const [idform, setIdform] = useState({ profileimg: '', fullname: '', academicyear: '', dateofbirth: '', address: '' })
  const [idcard, setIdcard] = useState(null)

  function handleIdChange(e) {
    const { name, value } = e.target
    setIdform((p) => ({ ...p, [name]: value }))
  }

  function handlePhotoChange(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setIdform((p) => ({ ...p, profileimg: url }))
  }

  function handleIdSubmit(e) {
    e.preventDefault()
    setIdcard(idform)
    setIdform({ profileimg: '', fullname: '', academicyear: '', dateofbirth: '', address: '' })
  }

  return (
    <div className="app-root">
      <section className="container">
        <h2>Programming Languages</h2>
        <div className="flex-container">
          {languages.map((l, i) => (
            <div className="lang-item" key={i}>{l}</div>
          ))}
        </div>
      </section>

      <section className="container1">
        <h2>Courses</h2>
        <div className="card-container">
          {courses.map((c, i) => (
            <article className="card" key={i}>
              {c.languageURL && <img src={c.languageURL} alt={c.courseName} />}
              <h3>{c.courseName}</h3>
              <div className="meta">
                <div className="price">Rs.{c.price}</div>
                <div className={`status ${c.active ? 'active' : 'inactive'}`}>{c.active ? 'Active' : 'Inactive'}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container2">
        <h2>Student List</h2>
        <div className="search-container">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" />
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Full Name</th>
                <th>Department</th>
                <th>CGPA</th>
                <th>Mobile No</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr><td colSpan={5}>No data found</td></tr>
              ) : (
                filteredStudents.map((s, idx) => (
                  <tr key={idx}>
                    <td>{s.rollno}</td>
                    <td>{s.fullname}</td>
                    <td>{s.department}</td>
                    <td>{s.cgpa}</td>
                    <td>{s.mobileno}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container3">
        <div className="upper-row">
          <div className="register-form">
            <h2>Register Form</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-field">
                <label>Full Name:</label>
                <input name="fullname" value={registerform.fullname} onChange={handleRegisterChange} />
              </div>
              <div className="input-field">
                <label>Department:</label>
                <select name="department" value={registerform.department} onChange={handleRegisterChange}>
                  <option value="">Select department</option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ENTC">ENTC</option>
                </select>
              </div>
              <div className="input-field">
                <label>CGPA:</label>
                <input name="cgpa" value={registerform.cgpa} onChange={handleRegisterChange} type="number" step="0.01" />
              </div>
              <div className="input-field">
                <label>Mobile No:</label>
                <input name="mobileno" value={registerform.mobileno} onChange={handleRegisterChange} />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>

          <div className="form-data">
            <h2>Form Data</h2>
            {submitted ? (
              <div>
                <p><strong>Full Name:</strong> {submitted.fullname}</p>
                <p><strong>Department:</strong> {submitted.department}</p>
                <p><strong>CGPA:</strong> {submitted.cgpa}</p>
                <p><strong>Mobile No:</strong> {submitted.mobileno}</p>
              </div>
            ) : (
              <p>No form data yet. Submit the form to see entries here.</p>
            )}
          </div>
        </div>

        <div className="lower-row">
          <div className="id-register">
            <h2>ID Card Registration</h2>
            <form onSubmit={handleIdSubmit} className="id-form">
              <div className="input-field">
                <label>Photo</label>
                <input name="profileimg" type="file" onChange={handlePhotoChange} accept="image/*" />
              </div>
              <div className="input-field">
                <label>Full Name:</label>
                <input name="fullname" value={idform.fullname} onChange={handleIdChange} />
              </div>
              <div className="input-field">
                <label>Academic Year:</label>
                <input name="academicyear" value={idform.academicyear} onChange={handleIdChange} />
              </div>
              <div className="input-field">
                <label>Date of Birth:</label>
                <input name="dateofbirth" value={idform.dateofbirth} onChange={handleIdChange} type="date" />
              </div>
              <div className="input-field">
                <label>Address:</label>
                <input name="address" value={idform.address} onChange={handleIdChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="id-card">
            <h2>ID CARD</h2>
            {idcard ? (
              <>
                <div className="photo-section">
                  {idcard.profileimg ? <img src={idcard.profileimg} alt={idcard.fullname || 'profile'} /> : <div className="photo-placeholder" />}
                </div>
                <div className="id-details">
                  <p><strong>Name:</strong> {idcard.fullname}</p>
                  <p><strong>Academic Year:</strong> {idcard.academicyear}</p>
                  <p><strong>DOB:</strong> {idcard.dateofbirth}</p>
                  <p><strong>Address:</strong> {idcard.address}</p>
                </div>
                <div className="id-footer">SKNSCOE PANDHARPUR</div>
              </>
            ) : (
              <p>No ID card generated yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
