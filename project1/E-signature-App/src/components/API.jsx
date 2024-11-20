  import { useEffect, useState } from "react"
 export function Testing (){

    const[api, setApi] = useState([])
     
    useEffect(()=>{
        const fetchData =async ()=>{
            const result = await fetch("https://dummy-json.mock.beeceptor.com/todos")
            const data = await result.json()
            setApi(data)
        }
      fetchData(); 
    },[])
     
    
  
   
  return (
    <>
    <h1>Hello Api </h1>
    <ul>
        <h1>Things you can do</h1>
        {
            api.map((curData)=>{
                return <li key={curData.id}>{curData.title}</li>
            })
        }
    </ul>
    </>
  )

 }

  //   fetch("https://dummy-json.mock.beeceptor.com/todos")
    //  .then((res)=> res.json())
    //  .then((data)=>setApi(data))
    //  .catch((error)=> console.log(error ))method 1