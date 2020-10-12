import React from 'react'
import {connect} from 'react-redux'
import spinner from './spinner.svg'
import { startGetTasks} from '../actions/tasksAction'
import { startGetAllProfiles} from '../actions/profileAction'

class Schedule  extends React.Component {
    constructor(){
        super()
        this.state={
           date: ''
        }
    }

    componentDidMount(){
        this.props.dispatch(startGetTasks())
        this.props.dispatch(startGetAllProfiles( ))
    }

    handleChange=(e)=>{
      this.setState({
          [e.target.name]: e.target.value
      })
    }

    handleSubmit= ()=>{ 
          localStorage.setItem('workLifeDate', (this.state.date.slice(0,10)))
          this.props.history.push('/scheduleDisplay')
    }      

    render(){
        console.log(this.state)
        return (
            <div className='schedulebody'>
            <br/><br/><br/><br/>
            <div  className='schedule'>
            {  this.props.tasks.length>0 && this.props.profile.length>0 ? (
                <div>
                <br/><br/><br/>
                <img src='/images/schedule.jpg' alt=''/>
                <form onSubmit ={this.handleSubmit}> 

                <div className="form-group">
                <label htmlFor='date'>Date</label>
                <input type='date' id='date'  name='date' value={this.state.date} onChange={this.handleChange} />
                <br/> <br/>
                </div>

                <div className="form-group">
                <input type='submit' value='Submit' class="btn btn-info"/>
                </div>
               </form>
             </div>
            ):(
                <div>
                  <h2> Enter your profile first and then activities</h2>  
                <img src={spinner} alt="spinner" style={{width:'400px',margin:'auto',display:'block'}} />
                  </div> 
                )             
            }
          </div>
          </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return{
        tasks: state.tasks,
        profile: state.allProfiles.filter(profile=>profile.email==localStorage.getItem('profileEmail'))
    }
}
export default connect(mapStateToProps)(Schedule)
