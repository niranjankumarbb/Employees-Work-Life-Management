import React from 'react'
import {connect} from 'react-redux'
import spinner from './spinner.svg'
import { startPutTasks} from '../actions/tasksAction'

class ScheduleDisplay  extends React.Component {     

    componentDidMount(){
        console.log('tasksPersonallife is', this.props.tasksPersonalLife)
    }

    handleChange=(e)=>{
      this.setState({
          [e.target.name]: e.target.value
      })
    }

    handleCheck=(id,completed)=>{
       const formData={
            completed: !completed
        }
        this.props.dispatch(startPutTasks(id,formData))
    }

    calculatePercentagePersonal= ()=> {
       const completedTasksPersonal= this.props.tasksPersonalLife.filter(task=>task.completed== true)
       const percentagePersonal= Math.round(((completedTasksPersonal.length)/(this.props.tasksPersonalLife.length))*100)
       return  percentagePersonal
    }

    calculatePercentageWork= ()=> {
        const completedTasksWork= this.props.tasksWork.filter(task=>task.completed== true)
        const percentageWork= Math.round(((completedTasksWork.length)/(this.props.tasksWork.length))*100)
        return  percentageWork
    }
 
    calculatePercentageWeekend= ()=> {
        const completedTasksWeekend= this.props.tasksWeekend.filter(task=>task.completed== true)
        const percentageWeekend= Math.round(((completedTasksWeekend.length)/(this.props.tasksWeekend.length))*100)
        return  percentageWeekend
    }

    handleSubmit= ()=>{ 
          localStorage.setItem('workLifeDate', (this.state.date.slice(0,10)))
     }

    render(){
       // console.log(this.state)
        return (
            <div className='displaybody'>
            <br/>
            <h3>Date- { localStorage.getItem('workLifeDate')}</h3>
            <div className='display'>
             <br/>
            {this.props.tasksWeekend.length==0? (
                <div>
                  { this.props.tasksPersonalLife.length>0 && this.props.tasksWork.length>0  ? (
                <div>
               <React.Fragment>
                  <h3>Personal life activities</h3>
                      <br/>
                       <div className="row">
                         {this.props.tasksPersonalLife.map((task, i)=>{
                          return (
                             <div className="col-md-4 profile-card" key={task._id}>
                           <div class="card" style={{width: "18rem"}}>
                            <div class="card-header bg-info ">
                               Title - {task.title}  
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Description - {task.description} </li>
                                <li class="list-group-item">Target - {task.target}</li>
                                <li class="list-group-item">
                                 Completed -<input type='checkbox' defaultChecked={task.completed} onChange={()=>{
                                 this.handleCheck(task._id, task.completed)}}/>
                                </li>
                            </ul>
                            </div>
                             {(i+1)%3==0 && (
                                 <div>
                                 <br/><br/><br/>
                                 </div>)}
                             </div>   
                            )
                         })
                        }
                      </div>                 
                   <br/><br/>
                   <h5>Personal life activities completed - {this.calculatePercentagePersonal()}%</h5>
                   <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.calculatePercentagePersonal()}%`}}></div>
                    </div>
                </React.Fragment>

                <br/><br/><br/>  

                <React.Fragment>
                <h3>Work related activities</h3>
                <br/>
                <div className="row">
                         {this.props.tasksWork.map((task, i)=>{
                          return (
                            <div className="col-md-4 profile-card" key={task._id}>
                            <div class="card" style={{width: "18rem"}}>
                            <div class="card-header bg-info ">
                               Title - {task.title}  
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Description - {task.description} </li>
                                <li class="list-group-item">Target - {task.target}</li>
                                <li class="list-group-item">
                                Completed -<input type='checkbox' defaultChecked={task.completed} onChange={()=>{
                                this.handleCheck(task._id, task.completed)}}/>
                                </li>
                            </ul>
                            </div>
                            {(i+1)%3==0 && (
                                 <div>
                                 <br/><br/><br/>
                                 </div>)}
                             </div>
                            )
                         })
                        }
                      </div>  
                <br/><br/>
                <h5>Work related activities completed - {this.calculatePercentageWork()}%</h5>
                <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.calculatePercentageWork()}%`}}></div>
                </div>
                </React.Fragment>
                </div>
            ):(
                <img src={spinner} alt="spinner" style={{width:'400px',margin:'auto',display:'block'}} />
            )              
           }            
          </div>
            ):(
              <div>
                   <React.Fragment>
                  <h3>Weekend activities</h3>
                  <br/>
                  <div className="row">
                         {this.props.tasksWeekend.map((task, i)=>{
                          return (
                            <div className="col-md-4 profile-card" key={task._id}>
                            <div class="card" style={{width: "18rem"}}>
                            <div class="card-header  bg-info">
                               Title - {task.title}  
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Description - {task.description} </li>
                                <li class="list-group-item">Target - {task.target}</li>
                                <li class="list-group-item">
                                 Completed -<input type='checkbox' defaultChecked={task.completed} onChange={()=>{
                                this.handleCheck(task._id, task.completed)}}/>
                                </li>
                            </ul>
                            </div>
                            {(i+1)%3==0 && (
                                 <div>
                                 <br/><br/><br/>
                                 </div>)}
                             </div>
                            )
                         })
                        }
                      </div>  
                   <br/><br/>
                   <h5>Weekend activities completed - {this.calculatePercentageWeekend()}%</h5>
                   <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.calculatePercentageWeekend()}%`}}></div>
                    </div>
                    <br/><br/><br/>
                </React.Fragment>
                </div>
            )}            
          </div>
          </div>
        )
    }
}

const mapStateToProps= (state)=>{    
    return{
        tasksPersonalLife: state.tasks.filter(task=>(task.date.slice(0,10) == (localStorage.getItem('workLifeDate')))&& task.activities=='personal_life'),
         tasksWork: state.tasks.filter(task=>(task.date.slice(0,10) == (localStorage.getItem('workLifeDate')))&& task.activities=='work' ),
        tasksWeekend: state.tasks.filter(task=>(task.date.slice(0,10) == (localStorage.getItem('workLifeDate')))&& task.activities=='weekend')
    }
}
export default connect(mapStateToProps)(ScheduleDisplay)
