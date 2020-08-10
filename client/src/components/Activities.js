import React from 'react'
import {connect} from 'react-redux'
 import spinner from './spinner.svg'
import {startGetAllProfiles} from '../actions/profileAction'
import {Link} from 'react-router-dom'


class  Activities  extends React.Component {
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){
      this.props.dispatch(startGetAllProfiles( ))
    }

    handleClick= ()=>{
        this.props.history.push('/activities1')
    }

    render(){
        return (
            <div className='activities'>
               { this.props.profile.length>0? (
                     <div>
                         <br/><br/>
                          <h2> Hi  {this.props.profile[0].fullname}</h2> 
                         {/* <div className="card card-body mb-3">
                        <div className="row">
                        <div className="col-md-12 zoom"> */}
                        {/* <h2> Hi  {this.props.profile[0].fullname},</h2> */}
                           {/* <Link to='#'>
                            <img
                                className="rounded mx-auto d-block z-depth-1 img-thumbnail"
                                src= {this.props.profile[0].avatar}
                                style={{height:'84px',width:'84px'}}
                                alt="photo"
                            />
                            </Link>
                            </div>
                            </div>
                            </div> */}
                         <br/><br/>
                         <h3> Maintain work-life balance</h3>
                         
                         <img src='/images/stress1.jpg' alt=''/>
                         <br/><br/><br/><br/><br/>
                         <h3>Tracking increases the chance of maintaining balance by 3x</h3>
                         <button onClick={this.handleClick} class="btn btn-info">Get started</button>
                       </div>
               ):(
                   <div>
                    <h2>Enter the profile</h2>
                <img src={spinner} alt="spinner" style={{width:'400px',margin:'auto',display:'block'}} />
                  </div>
                )

               }
            </div>
            
        )
    }
}

const mapStateToProps= (state)=>{
    return {
         profile: state.allProfiles.filter(profile=>profile.email==localStorage.getItem('profileEmail'))
     }
}
export default connect(mapStateToProps)(Activities)
