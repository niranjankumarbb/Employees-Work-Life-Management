import axios from 'axios'

export const startPostTasks = (formData)=>{
    console.log('TasksAction entered startPostTasks')
  return (dispatch)=>{
      axios.post('/tasks', formData, {
        headers : {
            'Authorization': localStorage.getItem('tokenWorkLife')
        }
      })
      .then(response=>{
          console.log('TasksAction post response' ,response.data)
        // sessionStorage.setItem('workLifeProfileId', response.data._id)
       //   dispatch(startGetProfile(response.data._id))
          dispatch(startGetTasks( ))
      })

    
      .catch(err=>{
          console.log('tasksAction startPostTasks error', err)
      })
  }
}
 


export const startGetTasks = ()=>{
    return (dispatch)=>{
       // console.log('startGetProfile id value', id)
        console.log('startGetTasks just before making axios.get')
        axios.get(`/tasks`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('tasksAction get response', response.data)
            dispatch(setTasks(response.data))
        })
        .catch(err=>{
            console.log('tasksAction startGetTasks error', err)
        })
    }
}


export const startRemoveTasks= (id, redirect)=>{
    console.log('entered tasksAction startRemoveTasks')
    return (dispatch)=>{
    
        axios.delete(`/tasks/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('tasksAction startRemoveTasks delete response', response.data)
            window.alert('Successfully removed')
            dispatch(startGetTasks( ))
            redirect()
        })
       
       
    }
}

 
export const startPutTasks = (id,formData)=>{
    console.log('tasks action put entered')
    return (dispatch)=>{
        axios.put(`/tasks/${id}`, formData, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('put tasks', response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
                 
             } else {
                alert('Successfully updated')
                dispatch(startGetTasks())
               // redirect()
            }
            })
             
        
    }
}




export const setTasks= (data)=>{
    console.log('entered setProfile func')
    return { type : 'SET_TASKS', payload : data}
}