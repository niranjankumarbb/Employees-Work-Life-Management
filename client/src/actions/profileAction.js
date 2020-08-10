import axios from 'axios'

export const startPostProfile = (formData)=>{
    console.log('profileAction entered startPostprofile')
  return (dispatch)=>{
      axios.post('/profile', formData, {
        headers : {
            'Authorization': localStorage.getItem('tokenWorkLife')
        }
      })
      .then(response=>{
          console.log('profileAction post response' ,response.data)
          localStorage.setItem('workLifeProfileId', response.data._id)
          alert('profile successfully posted')
          //   dispatch(startGetProfile(response.data._id))
          dispatch(startGetProfile(localStorage.getItem('workLifeProfileId')))
      })

    
      .catch(err=>{
          console.log('profileAction startPostprofile error', err)
      })
  }
}
 


export const startGetProfile = (id)=>{
    return (dispatch)=>{
        console.log('startGetProfile id value', id)
        console.log('startGetProfile just before making axios.get')
        axios.get(`/profile/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('profileAction get response', response.data)
            dispatch(setProfile(response.data))
        })
        .catch(err=>{
            console.log('profileAction startGetprofile error', err)
        })
    }
}


export const startGetAllProfiles = ( )=>{
    return (dispatch)=>{
         console.log('startGetAllProfiles just before making axios.get')
        axios.get(`/allprofiles`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('startGetAllProfiles get response', response.data)
            dispatch(setAllProfiles(response.data))
        })
        .catch(err=>{
            console.log('profileAction startGetAllprofiles error', err)
        })
    }
}



export const startRemoveProfile= (id)=>{
    console.log('entered profilesAction startRemovprofile')
    return (dispatch)=>{
    
        axios.delete(`/profile/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('profileAction startRemoveprofile delete response', response.data)
            window.alert('Successfully removed profile')
           dispatch(startGetAllProfiles())
         })
      
    }
}


export const startPutEmployee = (id,formData, redirect)=>{
    console.log('profile action put entered')
    return (dispatch)=>{
        axios.put(`/profile/${id}`, formData, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('put profile', response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
                 
             } else {
                alert('Successfully updated')
                dispatch(startGetProfile(localStorage.getItem('workLifeProfileId')))
                redirect()
            }
            })
             
        
    }
}




export const setProfile= (data)=>{
    console.log('entered setProfile func')
    return { type : 'SET_PROFILE', payload : data}
}

export const setAllProfiles= (data)=>{
    console.log('entered setAllProfiles func')
    return { type : 'SET_ALLPROFILES', payload : data}
}