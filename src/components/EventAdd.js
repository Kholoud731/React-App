import React, { useState, useEffect } from 'react';

function EventAdd(){

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouse = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('runned')
        window.addEventListener('mousemove', logMouse)

        return () => {
            console.log('removed')
            window.removeEventListener('mousemove', logMouse)
        }
    }, [])

    return (
        <div>
           X: {x},
           Y: {y}

        </div>
    )
}

export default EventAdd