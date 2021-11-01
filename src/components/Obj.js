import React, { useState } from 'react';


// function Obj(){
    
//     const [name, setName] = useState({first: '', last: ''})

    
//     return (
//         <div>
//             <input type='text' value={name.first} onChange={e => setName( {...name, first:e.target.value})}/>
//             <input type='text' value={name.last} onChange={e => setName({ ...name, last:e.target.value})}/>
//             <div>{JSON.stringify(name)}</div>

//         </div>
//     )
// }

// export default Obj

function Arr(){

    const [item, setItem] = useState([])
    const addItem = () => {
        setItem([...item, {id: item.length, val: Math.random() }])
    }
    
    return (
        <div>
            {item.map(el => <h1 key = {el.id}> {el.val}</h1>)}
            <button onClick={addItem}>Add Element </button>

        </div>
    )
}

export default Arr