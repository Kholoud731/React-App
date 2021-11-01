import React, { useState, useEffect } from 'react';

function InterFunc (){

    const [count , setCount ] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {

    const interv = setInterval(tick , 1000)

    return () => {
        clearInterval(interv)
    }
    }, [count])

    return (

        <div><h1>{count}</h1></div>
    ) 
        
    
}

export default InterFunc