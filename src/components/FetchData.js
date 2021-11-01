import React, { useState, useEffect } from 'react';
import axios from 'axios'


function FetchData (){
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [butid, setButId] = useState(1)

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${butid}`)
        .then(resp => {
            setPost(resp.data)
        }). catch (error => console.log(error))

    }, [butid])

    return (

        <div>
          {/* {posts.map(el => <li key = {el.id}>{el.title}</li>)}   */}

          <input type='text' value= {id} onChange={ e => setId(e.target.value)}/>
          <button onClick = {() => setButId(id)}> Fetch Data </button>
          <h1>{post.title}</h1>
        </div>
    ) 
        
    
}

export default FetchData