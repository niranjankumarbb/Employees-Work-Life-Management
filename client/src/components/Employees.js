import React, { Profiler } from 'react'
import {connect} from 'react-redux'
import spinner from './spinner.svg'
import { startGetAllProfiles, startRemoveProfile} from '../actions/profileAction'
import { startRemoveUser} from '../actions/userAction'

class Employees  extends React.Component {
     

    componentDidMount(){
        this.props.dispatch(startGetAllProfiles())

    }

     handleDelete= (profileId, userId)=>{
        this.props.dispatch(startRemoveProfile(profileId))
       this.props.dispatch(startRemoveUser(userId))
     }

    render(){
       // console.log(this.state)
        return (
            <div className='employees'>
            <div className="row">
            <div className="col-md-10 offset-md-1"> 
            <br/>
             <h1>Employees details</h1>
             <br/>
                      { this.props.allProfiles.length>0 && Object.keys(this.props.user).length>0? (
                <div>
                    <table border='1' className="table table-hover">
                        <thead  >
                            <tr>
                                <th>Sl no</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Mobile</th>
                                <th>Qualification</th>
                                <th>Experience</th>
                                <th>Skills</th>
                                {this.props.user.role== 'employer' && (
                                 <th>Remove</th>   
                                )}
                            </tr>
                        </thead>
                     <tbody>
                         
                         {this.props.allProfiles.map((profile, i)=>{
                          return (
                            <React.Fragment key={i}>
                             <tr key={i}>
                                {/* <td>{i+1}</td> */}
                                <th >{i+1}</th>
                                <td>{
                                     <img
                                     className="rounded mx-auto d-block z-depth-1 img-thumbnail"
                                      src= {profile.avatar}
                                      style={{height:'84px',width:'84px'}}
                                     alt="photo"
                                   />
                                    }</td>
                                <td>{profile.fullname}</td>
                                <td>{profile.email}</td>
                                <td>{profile.age}</td>
                                <td>{profile.gender}</td>
                                <td>{profile.mobile}</td>
                                <td>{profile.qualification}</td>
                                <td>{profile.experience}</td>
                                <td>{profile.skills}</td>
                                {this.props.user.role== 'employer' && (
                                 <td>
                                      <button
                                        onClick={()=>{
                                            this.handleDelete.bind(this )(profile._id, profile.user)}}
                                        type="button"
                                        title='Delete user'
                                        className="btn del btn-sm mr-1"
                                      >
                                        <i className="fa fa-times" />
                                    </button>
                                 </td>   
                                )}
                             </tr>
                             </React.Fragment>
                            )
                         })
                        }
                        
                     </tbody>
                 </table> 
                
                    
 
                <br/><br/><br/>  

                 
                </div>
                 ):(
                     <div align='center'>
                     <h2>Enter employees details</h2>
                    <img src={spinner} alt="spinner" style={{width:'400px',margin:'auto',display:'block'}} />
                     </div>
                    )
               }
               </div>
               </div>
             </div>
        )
    }
}



const mapStateToProps= (state)=>{
    
    return{
        allProfiles: state.allProfiles,
        user: state.user
     }
}
export default connect(mapStateToProps)(Employees)
