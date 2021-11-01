import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';


class Login extends Component{

    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
        this.setT= ''
        this.input = React.createRef();
    }

 checkLog = (e) => {
     
        e.preventDefault()

        console.log(e.target.email.value)
        console.log(e.target.password.value)
        

        this.setState({
            email : e.target.email.value,
            password : e.target.password.value
        },() => {


                    axios.post('https://reqres.in/api/login', this.state)
                    .then( (response) =>  {
                        console.log(response.data.token);
                        if (response.data.token){
                            // this.setT('correct')
                        }})
    

                        console.log(this.state.email)
                        console.log(this.state.password) })}

render(){

    return (
        <div className='back'>

<div className="cont">

            <form onSubmit={this.checkLog}>
                        
                        <div className="input-group input-group-lg">
                        <span style={{width: '20%', background: '#004480'}} className="input-group-text" id="inputGroup-sizing-lg">Email</span>
                        <input type="text" name= 'email' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                        </div>
                        
                    
                        <div className="input-group input-group-lg">
                        <span style={{width: '20%', background: '#004480'}}  className="input-group-text" id="inputGroup-sizing-lg">Password</span>
                        <input type="text" name= 'password' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                        </div>
                        
                        <input className="log" type='submit' value='Login'/>
                        
                        <p><span>Not registered?</span> 
                        {this.setT == 'correct' && <span style = {{color: 'green'}}>Welcome </span>}
                        {this.setT == 'Notcorrect' && <span style = {{color: 'red'}}>Not Correct </span>}
                        {this.setT == '' && <span style = {{color: 'white'}}>Please Register</span>}
                        
                        </p>
            </form>         
        
        </div>
        </div>
    )


    
}}

export default Login

{/* 

    "email": "eve.holt@reqres.in",
    "password": "cityslicka" */}

