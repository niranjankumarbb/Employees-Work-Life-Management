import React from 'react'
import {connect} from 'react-redux'
import spinner from './spinner.svg'
import {startPostProfile, startRemoveProfile, startGetProfile} from '../actions/profileAction'
 class Profile extends React.Component{
    constructor (){
        super()
        this.state= {
            fullname : '',
            photo: '',
            email : '',
            age: '',
            gender:'',
            mobile : undefined,
            qualification:'',
            organization:'',
            experience:'',
            skills:''
          
        }
    }

    componentDidMount(){
        console.log('entered profile componentDidMount')
        if(this.props.profile.length>0){
         this.props.dispatch(startGetProfile(localStorage.getItem('workLifeProfileId')))
        }
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
 
    handleDelete=()=>{
        const confirmed= window.confirm('Are you sure?')
         if(confirmed){
            const id=localStorage.getItem('workLifeProfileId')
            const redirect = ()=>{
              return  this.props.history.push('/')
            }
            this.props.dispatch(startRemoveProfile(id,redirect))
       }
    }

    handleSubmit = (e)=>{
         e.preventDefault()        
         const formData ={
            fullname : this.state.fullname,
            avatar:this.state.photo,
            email : this.state.email,
            age:this.state.age,
            gender:this.state.gender,
            mobile : this.state.mobile,
            qualification:this.state.qualification,
            organization:this.state.organization,
            experience:this.state.experience,
            skills:this.state.skills          
         }
         const redirect = ()=>{
            console.log('redirect function entered')
            return  this.props.history.push('/')
         }
        this.props.dispatch(startPostProfile(formData))
    }


    render(){
        console.log('AddProfile state values ',this.state)
         return(
            <div  className='profile'>
                {(this.props.profile.length>0) ?(
                <div>
                <img src='/images/profile.jpeg' alt=''/>
                <h1> Add Profile </h1>                 
                <div className="row">
                <div className="col-md-6 offset-md-3">
                <button onClick={()=>{
                    this.handleDelete()}} class="btn btn-danger">Delete</button>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                   <label htmlFor='fullname'> Full Name </label> 
                    <br/> 
                    <input type='text' id='fullname' name='fullname'  value={this.state.fullname} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='photo'> Photo </label> 
                    <br/> 
                    <input type='text' id='photo'  name='photo'  value={this.state.photo} onChange={this.handleChange} placeholder='Enter your photo path' className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='email'> Email </label> 
                    <br/> 
                    <input type='text' id='email'  name='email'  value={this.state.email} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='age'> Age </label> 
                    <br/> 
                    <input type='text' id='age'  name='age'  value={this.state.age} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='gender'> Gender </label> 
                    <br/> 
                    <input type='text' id='gender'  name='gender'  value={this.state.gender} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor='mobile'> Mobile </label> 
                    <br/> 
                    <input type='number' id='mobile' name='mobile'  value={this.state.mobile} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='qualification'> Qualification </label> 
                    <br/> 
                    <input type='text' id='qualification'  name='qualification'  value={this.state.qualification} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='organization'> Organization </label> 
                    <br/> 
                    <input type='text' id='organization'  name='organization'  value={this.state.organization} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='experience'> Experience </label> 
                    <br/> 
                    <input type='text' id='experience'  name='experience'  value={this.state.experience} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <label htmlFor='skills'> Skills </label> 
                    <br/> 
                    <input type='text' id='skills '  name='skills'  value={this.state.skills} onChange={this.handleChange} className="form-control"/>
                    <br/>  
                    </div>

                    <div className="form-group">
                    <input type='submit' value='Submit'   className="form-control"/>

                    </div>              

                </form>
                </div>

                </div>
                </div>
                ):(
                  <img src={spinner} alt="spinner" style={{width:'100px',margin:'auto',display:'block'}} />
                )}               
          </div>
        )
    }
}

const mapStateToProps= (state)=>{
    console.log('AddProfile page mapStateToProps entered')
    return {
        profile : state.profile

    }
}
export default connect( mapStateToProps)(Profile)