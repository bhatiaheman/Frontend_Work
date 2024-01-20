import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  const [length, setLength] = useState(8)

  const [numbers, setNumbers] = useState(false)

  const [characters, setCharacters] = useState(false)

  const [password, setPassword] = useState('')


  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers) {
      str += "0123456789"
    }

    if(characters) {
      str += "!@#$%^&*()_+"
    }

    for(let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length
  , numbers, characters, setPassword])

  const copyPasswordFromClipbaord = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)

  }, [password])





    useEffect(() => {
      passwordgenerator()
    }, [numbers ,characters, length, passwordgenerator])
  
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          
          />

          <button
            onClick={copyPasswordFromClipbaord}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              className='cursor-pointer'
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
            />
              <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                  setCharacters((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
