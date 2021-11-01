import React, { useState, useEffect } from 'react';


function Counter(){
    const ini = 0
    const [count, setCount] = useState(ini)
    const [name, setName] = useState('')
    
    useEffect(() => {
        console.log('runned')
        document.title = `you cliked ${count} times`
    }, [count])

    // const incFive = () => {
    //     for(let i = 0; i < 5; i++){
    //         setCount(prevCount => prevCount + 1)
    //     }
    // }
    return (
        <div>
           <h1> count {count}</h1>
            {/* <button onClick= {() => setCount(ini)}>set </button> */}
            <button onClick= {() => setCount(prevCount => prevCount + 1)}>increment </button>
            {/* <button onClick= {() => setCount(prevCount => prevCount - 1)}>decr </button>
            <button onClick= {incFive}>incr 5</button> */}
            <input type = 'text' value = {name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default Counter