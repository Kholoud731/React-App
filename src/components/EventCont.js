import React, { useState, useEffect } from 'react';
import EventAdd from './EventAdd';

function EventCont(){

    const [d, setD] = useState(true)

    return (
        <div>
            <button onClick = {() => setD(!d)}>Remove Listener</button>
            {d && <EventAdd/>}
        </div>
    )
}

export default EventCont