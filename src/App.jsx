import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto px-4">
      <Navbar />
      {/* Your other content */}
      <footer className="mt-8">
        {/* Footer content */}
      </footer>
    </div>
    </>
  )
}

export default App
