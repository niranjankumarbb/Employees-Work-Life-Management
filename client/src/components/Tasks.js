import React from 'react'
import { connect } from 'react-redux'
import {startPostTasks, startGetTasks} from '../actions/tasksAction'
 
class Tasks extends React.Component{
   state = {
   activities: localStorage.getItem('activities'),
       title : '',
 description : '',
      date   : undefined,
  target     : '',
 completed   : false,
 }

   componentDidMount(){
    //    if(this.props.tasks.length == 0){
           this.props.dispatch(startGetTasks())
    //   }
   }

   handleChange = (e)=>{ 
       this.setState({
        [e.target.name] : e.target.value
       })
   }

   handleComplete=(e)=>{
       this.setState(prevState=>{
           return{
               completed : !prevState.completed
           }
       })
   }

   handleSubmit = (e)=>{
       e.preventDefault()
       const formData = {
          activities:this.state.activities,
              title : this.state.title,
        description : this.state.description,
           date     : this.state.date,
         target     : this.state.target,
        completed   : this.state.completed,
       }
       this.props.dispatch(startPostTasks(formData))
   }

   render(){
       console.log('Tasks component state',this.state)
       return (
           <div className='tasks' >
                        <div className="row">
                        <div className="col-md-6 offset-md-3">
                        {(this.props.location.state.detail=='personal_life')&&
                         <div>
                        <img src='/images/p3.jpg' alt=''/>
                        <br/><br/>
                        <h2>Personal life activities</h2>
                         </div>
                         }

                        {(this.props.location.state.detail=='work')&&
                         <div>
                        <img src='/images/act1.jpg' alt=''/>
                        <br/><br/>
                        <h2>Work related activities</h2>
                        </div>
                         }

                        {(this.props.location.state.detail=='weekend')&&
                        <div>
                        <img src='/images/w4.jpg' alt=''/>
                        <br/><br/>
                        <h2>Weekend related activities</h2>
                        </div>
                         }

                        <form onSubmit ={this.handleSubmit}>
                         <br/>
                        <div className="form-group">
                            <input type='text' name='activities' value={this.state.activities} className='form-control' />
                            <br/> <br/>
                        </div>

                        <div className="form-group">
                        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} placeholder='title' className='form-control'  />
                        <br/> 
                        </div>

                        <div className="form-group">
                        <textarea  name='description' value = {this.state.description} onChange={this.handleChange} placeholder='description' className='form-control' />
                        <br/>
                        </div>

                        <div className="form-group">
                        <label htmlFor='date'>Date</label>
                        <input type='date' id='date'  name='date' value={this.state.date} onChange={this.handleChange} className='form-control'/>
                        <br/>  
                        </div>

                        <div className="form-group">
                        <label htmlFor='target'>Target</label>
                        <input type='target' id='target'  name='target' value={this.state.target} onChange={this.handleChange} placeholder='deadline' className='form-control' />
                        <br/>  
                        </div>

                        <div className="form-group">
                        <label htmlFor='completed'>Completed    </label>
                        <input type='checkbox' id='completed' name='completed' value={this.state.completed} onChange={this.handleComplete} />
                        <br/>  
                        </div>

                        <div className="form-group">
                            <input type='submit' value='Submit' class="btn btn-info"  className='form-control'/>
                            </div>
                        </form>                  
                        </div>
                 </div>            
           </div>
       )
   }
}
 
export default connect()(Tasks)