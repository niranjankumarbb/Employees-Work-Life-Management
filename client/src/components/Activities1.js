import React from 'react'
 
class  Tasks extends React.Component {
    constructor(){
        super()
        this.state={
            activities: ''
        }
    }

    handleClick1=()=>{
        this.setState({ activities: 'personal_life'}, ()=>{
          localStorage.setItem('activities', this.state.activities)
          this.props.history.push({
            pathname:'/tasks',
            state: {detail: 'personal_life'}
        })
       })        
    }

    handleClick2=()=>{
        this.setState({ activities:'work'}, ()=>{
            localStorage.setItem('activities', this.state.activities)
            this.props.history.push({
                pathname:'/tasks',
                state: {detail: 'work'}
            })
         })
     }

     handleClick3=()=>{
        this.setState({ activities:'weekend'}, ()=>{
            localStorage.setItem('activities', this.state.activities)
            this.props.history.push({
                pathname:'/tasks',
                state: {detail: 'weekend'}
            })
        })
     }

    render(){
        return (
            <div className='activities1' >
                 <br/><br/>
                 <img src='/images/activities.jpg' alt=''/>
                 <br/><br/><br/><br/><br/>
                 <button onClick={this.handleClick1} class="btn btn-info">Personal life</button>
                 <button onClick={this.handleClick2} class="btn btn-info">Work</button>
                 <button onClick={this.handleClick3} class="btn btn-info">Weekend</button>
             </div>            
        )
    }
}

export default Tasks
