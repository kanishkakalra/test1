export  function Handling(){
    
    function handleClick(){
        alert("event handling")
    }

    function HandleClick(user){
        alert(`" hello ${user} "` )
    }
    return(
        <>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>{HandleClick("kanishka")}}>Click Me</button>
</>
    )
}