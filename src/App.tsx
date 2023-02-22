import { useState } from 'react'
import './App.css'
import { Body, Footer, Header} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center w-[100vw] px-5 md:px-24 py-10 max-w-6xl'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
