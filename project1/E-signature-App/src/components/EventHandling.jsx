export  function Handling(){
    
    function handleClick(){
        alert("event handling")
    }


    return(
        <>
        <button onClick={handleClick}>Click Me</button></>
    )
}