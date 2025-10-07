import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <h2>LEADSOFT</h2>
        <div className="link">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
          <button>Get Started</button>
        </div>
      </div>
      <div className="homepage">
        <div className="text-content">
          <h2>Learn with us</h2>
          <h3>Get started today..</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam reiciendis veniam aspernatur voluptas itaque fugit officia distinctio quisquam nobis. Reiciendis et, amet odit id ut quidem cum nisi molestias eaque.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit distinctio ab delectus est enim expedita officiis in, aut id quasi dignissimos neque, facilis sed, omnis error quidem magnam perspiciatis.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, reprehenderit alias. Consectetur ex, architecto quis neque vel velit explicabo. Provident, illo placeat! Quidem in eligendi obcaecati porro exercitationem explicabo maxime.</p>
        </div>
        <div className="banner">
          
        </div>
      </div>
    

<div className="about-us">
  <h2>About Us</h2>
  <div className="card-container">
    <div className="card">
      <div className="card-icon-top">
        <div className="web-icon">
          <i className="ri-eye-fill"></i>
        </div>
      </div>
      <h2>Vision</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti, neque labore quia optio eveniet esse numquam veniam atque rerum adipisci non facere ea mollitia beatae quisquam odit nulla harum.
      </p>
    </div>
    <div className="card">
      <div className="card-icon-top">
        <div className="web-icon">
          <i className="ri-focus-3-fill"></i>
        </div>
      </div>
      <h2>Mission</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti, neque labore quia optio eveniet esse numquam veniam atque rerum adipisci non facere ea mollitia beatae quisquam odit nulla harum.
      </p>
    </div>
    <div className="card">
      <div className="card-icon-top">
        <div className="web-icon">
          <i className="ri-school-fill"></i>
        </div>
      </div>
      <h2>Goals</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti, neque labore quia optio eveniet esse numquam veniam atque rerum adipisci non facere ea mollitia beatae quisquam odit nulla harum.
      </p>
    </div>
  </div>
</div>
       
    </>
  )
}

export default App
