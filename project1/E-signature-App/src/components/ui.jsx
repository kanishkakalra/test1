import { useState } from "react"

export function Header( {name} ) {
  
    return (
   
      <div className=" m-20 ">
      <h1 className=" text-center text-5xl ">{!name ? "Name" : name}</h1>
      </div>
     
    )
  }