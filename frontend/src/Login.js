import React , {Component} from 'react';
import './register.css';
import {Link} from 'react-router-dom';
import { Add } from './Add';

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  onChange = (event) =>{
    this.setState({ [event.target.name] : event.target.value});
  }
  onSubmit = (event) =>{
    event.preventDefault();
    const {username , password} = this.state;
    fetch('http://localhost:3000/users/login' , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(this.state)
    })
    .then((result)=>{
      console.log(result)
    })
  }
  render(){
    const { username , password} = this.state;
    return(
      <div className="body">
        <h1>Create your Account</h1>
        <div className="register-form">
              <form method='POST' action='http://localhost:3000/users/login'>
                Name : <input label="Name" name="username" /><br /><br />
                Password : <input label="Password" name="password" /><br /><br />
                <button type='Submit' variant="contained" color="primary">
                  Register
                </button>
              </form>
            </div>
            <h1>Already have an account</h1>
                <Link to = '/Add'>Add</Link>
      </div>
      );
  }
}

export default Register;
