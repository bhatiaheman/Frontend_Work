import { useState } from 'react'


function App() {

  const [length, setLength] = useState(8)

  const [numbers, setNumbers] = useState(false)

  const [characters, setCharacters] = useState(false)

  const [password, setPassword] = useState('')

  const passwordgenerator = () => {
    
  }
  

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
