import React , {Component} from 'react';
import './register.css';

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
    fetch('http://localhost:3000/users/signup' , {
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
              <form method='POST' action='http://localhost:3000/users/signup'>
                Name : <input label="Name" name="username" /><br /><br />
                Password : <input label="Password" name="password" /><br /><br />
                <button type='Submit' variant="contained" color="primary">
                  Register
                </button>
              </form>
            </div>
      </div>
      );
  }
}

export default Register;
