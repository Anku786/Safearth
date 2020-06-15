import React , {Component} from 'react';

class Add extends Component{
  constructor(props){
    super(props)
    this.state = {
      project: ''
    }
  }
  onChange = (event) =>{
    this.setState({ [event.target.project] : event.target.value});
  }
  onSubmit = (event) =>{
    event.preventDefault();
    const {project} = this.state;
    fetch('http://localhost:3000/todos/newtodo' , {
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
    const {project} = this.state;
    return(
      <div>
        <h1>Add Item</h1>
        <div className="register-form">
              <form method='POST' action='http://localhost:3000/todos/newtodo'>
               
                Project : <input  label="Project" name="project" />
                <button type='Submit' variant="contained" color="primary">
                  Add
                </button>
              </form>
      </div>
      </div>
      );
  }
}

export default Add;
