import React from 'react'
import { connect } from 'react-redux'
import {startLoginUser} from '../actions/userAction'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email: '',
            password : ''
        }
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault()
        const formData={
            email : this.state.email,
            password : this.state.password
        }
        localStorage.setItem('profileEmail',this.state.email)
        const redirect = ()=>{
          return this.props.history.push('/home')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
    }

    render(){
        // console.log(this.state)
        return(
            <div className='login'>
                  <div className="row">
                  <div className="col-md-4 offset-md-4"> 
                      <img src='/images/login1.jpg' alt=''/> 
                         <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <label htmlor='email'>email</label>
                            <input type ='text' id='email' name='email' value={this.state.email} onChange={this.handleChange} className="form-control"/>
                            <br/> 
                            </div>
                            <div className="form-group">
                            <label htmlor='password'>password</label>
                            <input type ='password' id='password' name='password' value={this.state.password} onChange={this.handleChange} className="form-control"/>
                            <br/>   
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
export default connect()(Login)