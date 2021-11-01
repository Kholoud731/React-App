import React  from 'react';
import B from './B';


export const userContext = React.createContext()
export const userChannel = React.createContext()

function A(){


    return (
        <div>
            <userContext.Provider value={'kholoud'}>
            <userChannel.Provider value={'FB'}>
            <B/>
            </userChannel.Provider>
            </userContext.Provider>
        </div>
    )
}

export default A