import React, { useState, useEffect } from 'react';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'


function Register(){

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pas, setPas] = useState('')
    const [conf, setConf] = useState('')

    useEffect(() => {


    },[])

    return (
        <div className='back'>
        <div className="cont">
		<h2 style={{color: 'white'}}>Create an Account</h2>
		<p className="hint-text">Sign up with your social media account or email address</p>
		<div className="social-btn text-center">
			<a href="#" className="btn btn-primary btn-lg">Facebook </a>
			<a href="#" className="btn btn-info btn-lg">Twitter </a>
			<a href="#" className="btn btn-danger btn-lg">Instgram </a>
		</div>
		<div className="or-seperator"><b>or</b></div>
        <div className="form-group">
        	<input type="text" 
            className="form-control input-lg" 
            name="username" 
            placeholder="Username"
            value = {user}
            onChange={(e)=> setUser(e.target.value)}/>
        </div>


		<div className="form-group">
        	<input type="email" 
            className="form-control input-lg" 
            name="email" 
            placeholder="Email Address" 
            value = {email}
            onChange={(e)=> setEmail(e.target.value)}/>
        </div>
		<div className="form-group">
            <input type="password" 
            className="form-control input-lg" 
            name="password" 
            placeholder="Password"
            value = {pas}
            onChange={(e)=> setPas(e.target.value)}/>
        </div>
		<div className="form-group">
            <input type="password" 
            className="form-control input-lg" 
            name="confirm_password" 
            placeholder="Confirm Password"
            value = {conf}
            onChange={(e)=> setConf(e.target.value)}/>
        </div>  
        <div className="form-group">
            <button type="submit" 
            className="btn btn-success btn-lg btn-block signup-btn"
            onClick = {console.log(user, pas, conf, email)}
            >Sign Up</button>
        </div>

        </div>
        </div>
    )
}

export default Register