import axios from 'axios'
import {startGetAllProfiles} from './profileAction'

    export const startRegisterUser= (formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/register', formData )
            .then((response)=>{
                console.log(response.data)
                if(response.data._id){
                    redirect()
                }else {
                    alert('Registration failed')
                }
            })
            .catch((err)=>{
            console.log(err)
            })
        } 
    }

   export const startLogout= ()=>{
       return (dispatch)=>{
        axios.delete('/users/logout', {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        }) 
        .then((response)=>{
            console.log('startLogout response received from server', response.data)
            localStorage.removeItem('tokenWorkLife')
            dispatch(setUser({}))
            alert('logout successfully')
            window.location.href = '/'
        }) 
        .catch((err)=>{
            console.log(err)
        })    
     }
   }

   export const startLoginUser = (formData, redirect)=>{
       return (dispatch)=>{
           axios.post('/users/login', formData)
            .then((response)=>{
              console.log('startLoginUser response.data',response.data)
              if(response.data.token){
                localStorage.setItem('tokenWorkLife', response.data.token)
                dispatch(startGetAllProfiles())
                dispatch(startGetUser())
                redirect()
              }else {
                  alert('Login failed')
              }                          
            })
            .catch((err)=>{
                console.log(err)
            })
       }
    }

   export const startGetUser = ()=>{
      return (dispatch)=>{
        axios.get('/users/account', {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then((response)=>{
            console.log(response.data)
            dispatch(setUser(response.data))
             
        })
        .catch((err)=>{
            console.log(err)
        })
       }            
   }

   export const startRemoveUser = (id)=>{
    return (dispatch)=>{
      axios.delete(`/users/account/${id}`, {
          headers : {
              'Authorization' : localStorage.getItem('tokenWorkLife')
          }
      })
      .then((response)=>{
          console.log('deleted user details',response.data)
         alert('successfully deleted user account')
      })
      .catch((err)=>{
          console.log(err)
      })
     }          
   }
 
   export const setUser = (user)=>{
          return {type: 'SET_USER', payload: user}
   }
