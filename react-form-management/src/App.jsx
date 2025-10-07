
import { useForm } from 'react-hook-form'
import './App.css'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  const {register,handleSubmit,reset,formState: {errors}} = useForm()
  const [students,setStudents] = useState([])
const onFormSubmit = (data)=>{
  setStudents([
    ...students,
    data
  ])
 toast.success('student added successfully')
  reset()
}
const onFormReset=()=>{
  reset()
}
const onDeleteRecord = (idx)=>{
  const filteredStudents = students.filter((tmp, index) => index !== idx);
  setStudents (filteredStudents);
  toast.success('student record deleted')
}

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toasterId="default"
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
     <div className="container">
      <div className="form-container">
        <h2>Add students</h2>
  <form onSubmit={handleSubmit(onFormSubmit)} onReset={onFormReset}>
          <div className="input-field">
            <label>fullname</label>
            <div className="input-with-icon">
              <i className='ri-user-fill'></i>
              <input {...register ('fullname',{required :'full name is required'})} type="text" />
            </div>
            {errors.fullname && <p style={{ color:'red',fontSize:'12px',fontWeight:'520',marginTop:'4px'}}>{errors.fullname.message}</p>}
           
          </div>
           <div className="input-field">
            <label>email</label>
            <div className="input-with-icon">
              <i className='ri-mail-fill'></i>
              <input {...register ('email',{required :'email is required'})} type="text" />
            </div>
             {errors.email && <p style={{ color:'red',fontSize:'12px',fontWeight:'520',marginTop:'4px'}}>{errors.email.message}</p>}
          </div>
           <div className="input-field">
            <label>mobile</label>
            <div className="input-with-icon">
              <i className='ri-phone-fill'></i>
              <input {...register ('phone',{required :'mobile number is required'})} type="number" />
            </div>
             {errors.phone && <p style={{ color:'red',fontSize:'12px',fontWeight:'520',marginTop:'4px'}}>{errors.phone.message}</p>}
            </div>
            <div className="action-field">
              <button type="submit">Add record</button>
              <button type="reset">Cancel</button>
            </div>
        </form>
      </div>
      <div className="table-container">
        <h2>Student List</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>fullname</th>
              <th>email</th>
              <th>mobile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              students.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{textAlign:'center'}}>No records found</td> 
                </tr>
              ) : 
              students.map((tmp,index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{tmp.fullname}</td>
                    <td>{tmp.email}</td>
                    <td>{tmp.phone}</td>
                    <td>
                      <i  onClick ={()=>{onDeleteRecord(index)}} className='ri-delete-bin-5-fill' ></i>
                    </td>
                  </tr>
                )
              })
            }
             
          </tbody>
        </table>
      </div>
     </div>
    </>
  )
}

export default App
