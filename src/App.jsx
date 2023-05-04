import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
    
       <div>

    <Outlet/>
       </div>
    
  </React.Fragment>
  )
}

export default App
