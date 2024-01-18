import { useCallback, useState } from 'react'


function App() {

  const [length, setLength] = useState(8)

  const [numbers, setNumbers] = useState(false)

  const [characters, setCharacters] = useState(false)

  const [password, setPassword] = useState('')

  const passwordgenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers) {
      str += "0123456789"
    }

    if(characters) {
      str += "!@#$%^&*()_+"
    }

    for(let i = 0; i < Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
    }


  }, [length
  , numbers, characters, setPassword])
    
  
  

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
