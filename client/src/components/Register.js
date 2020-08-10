import React from 'react'
import { connect } from 'react-redux'
import {startRegisterUser} from '../actions/userAction'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username : '',
               email : '',
            password : '',
              role   : ''
        }
    }

    handleChange =(e)=> {
      this.setState({
          [e.target.name] : e.target.value
      })
    }

    handleRole =(data)=> {
        this.setState({
             role : data
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData= {
            username: this.state.username,
                email: this.state.email,
            password: this.state.password ,
            role  : this.state.role   
        }
        const redirect = ()=> {
            this.props.history.push('/login')
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
    }

    render(){
        console.log(this.state)
        return(
            <div className='register'>
                <div className="row">
                  <div className="col-md-3 offset-md-0.5 "> 
                  <br/><br/><br/><br/><br/>
                <img src='/images/register.jpg' alt=''/>
                 </div>
                 <div className="col-md-3 offset-md-2"> 
                 <br/>
                <h2> Register</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                <input type="radio"  name='role' id="employer" value={this.state.role} onChange={() => {this.handleRole('employer')}} checked={this.state.role == 'employer'} className="mr-1" />
                <label htmlFor="employer"   className="mr-3">Employer  </label>

                <input type="radio" name='role' id="employee" value={this.state.role} onChange={() => {this.handleRole('employee')}} checked={this.state.role == 'employee'} className="mr-1" />
                <label htmlFor="employee"   className="mr-3">Employee</label>
                </div>

                <div className="form-group">
                <label htmlFor='username'>username</label>
                <input typr='text' id='username' name='username' value={this.state.username}  onChange={this.handleChange} className="form-control"/>
                 
                </div>
                 <label htmlFor='email'>email</label>
                <input typr='text' id='email' name='email' value={this.state.email}  onChange={this.handleChange} className="form-control"/>
                <div className="form-group">                        
                 </div>

                <div className="form-group">
                <label htmlFor='password'>password</label>
                <input type='password' id='password' name='password' value={this.state.password}  onChange={this.handleChange} className="form-control"/>
                </div>

                <div className="form-group">
                <input type='submit' value='submit' className="form-control"/>       
                </div>      
              </form> 
            </div>
            </div>
         </div>  
        )
    }

}

export default connect()(Register)