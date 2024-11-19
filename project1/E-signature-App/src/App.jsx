import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/ui'

function App() {
  const [val, setVal]= useState("")
  const [date, setDate]= useState()

  const nameChange=(e)=>{
    // console.log(e.target.value)
    setVal(e.target.value)
  }
  const dateChange=(e)=>{
    setDate(e.target.value)
  }

  return (
<>
   <Header name={val}/>
   <Header name = {!date ? "Dob " : date}/>
   <p className=" text-center mx-36">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam, necessitatibus suscipit doloribus quo ipsum illo optio nemo assumenda earum esse temporibus, facere aliquid inventore explicabo? Porro architecto cum hic possimus qui obcaecati? Quis ratione, consequatur ipsam impedit saepe, laborum voluptate atque eius debitis minima quas delectus nemo inventore nostrum  </p>
    <input type="date" value={date} className='' onChange={dateChange}/>
    <input type="text" value={val} className='border-2 border-dotted outline-none py-2' onChange={nameChange}/>
  
   </>
  )
}

export default App
