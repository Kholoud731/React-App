import React, {useContext} from 'react';

import { userContext, userChannel } from './A';

function C(){

const user = useContext(userContext)
const channel = useContext(userChannel)

    return (
        <div>
Component C {user} -- {channel}

        </div>
    )
}

export default C