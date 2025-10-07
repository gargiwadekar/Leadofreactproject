
import './App.css'
import { useState } from 'react'

function App() {
  // off by default
  const [isOn, setIsOn] = useState(false)

  return (
    <div className={isOn ? 'app on' : 'app off'}>
      <main className="center">
        <div className="logo-wrap">
          {/* Use Remix Icon classes as requested */}
          {isOn ? (
            <i className="ri-lightbulb-flash-fill icon icon-on" aria-hidden />
          ) : (
            <i className="ri-lightbulb-fill icon icon-off" aria-hidden />
          )}

          {/* glowing halo when on */}
          <div className={isOn ? 'halo visible' : 'halo'} aria-hidden />
        </div>

        <button
          className="toggle"
          onClick={() => setIsOn(prev => !prev)}
          aria-pressed={isOn}
        >
          {isOn ? 'Turn Off' : 'Turn On'}
        </button>
      </main>
    </div>
  )
}

export default App
