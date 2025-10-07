import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('Eat, Sleep and Repeat')
  const [click, setClick] = useState(true)

  const onbuttonclick = () => {
    if (quote === 'Eat, Sleep and Repeat') {
      setQuote('Nothing is impossible in this life because the word impossible says I am possible')
    } else {
      setQuote('Eat, Sleep and Repeat')
    }
  }

  const onbuttonclick1 = () => {
    setClick(!click)
  }

  return (
    <div className="container">
      <div className="box">
        <div className="para-box">
          <p className="para">{quote}</p>
        </div>
        <button className="btn" onClick={onbuttonclick}>Click Me</button>
      </div>

      <div className="box">
        {click && (
          <div className="para-box">
            <p className="para">Eat, Sleep and Repeat</p>
          </div>
        )}
        <button className="btn" onClick={onbuttonclick1}>Click Me</button>
      </div>
    </div>
  )
}

export default App




