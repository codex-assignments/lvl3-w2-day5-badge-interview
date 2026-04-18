import { useState } from 'react'

import './App.css'
import Pets from './components/Pets'
import pets from './pets'



function App() {

  const [number, setNumber] = useState(0)
  

  
  return (
    <>
      <p>
        {pets.map(pet => (
          <Pets name={pet.name} />
                 
        ))}
      </p>
      <p>
        {number}
      </p>
                  <button onClick={()=>setNumber(number+1)}>+1</button>
    </>
  )
}

export default App
