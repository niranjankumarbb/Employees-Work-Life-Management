import axios from 'axios'

export const startPostPost = (formData)=>{
     return (dispatch)=>{
      axios.post('/posts', formData, {
        headers : {
            'Authorization': localStorage.getItem('tokenWorkLife')
        }
      })
      .then(response=>{
        dispatch(startGetPosts())
      })    
      .catch(err=>{
          console.log('postsAction startPostPosts error', err)
      })
  }
} 

export const startGetPosts = ()=>{
    return (dispatch)=>{
         axios.get(`/posts`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            // console.log('postsAction get response', response.data)
            dispatch(setPosts(response.data))
        })
        .catch(err=>{
            console.log('postsAction startGetPosts error', err)
        })
    }
}


export const startRemovePosts= (id, redirect)=>{
     return (dispatch)=>{    
        axios.delete(`/posts/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('postsAction startRemovePosts delete response', response.data)
            window.alert('Successfully removed')
            dispatch(startGetPosts())
         })
    }
}

  
export const startPostLikes = (id)=>{
     return (dispatch)=>{
        axios.post(`/posts/likes/${id}`,{}, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('post likes', response.data)
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)            
             } else {
                alert('Successfully updated likes')
                dispatch(startGetPosts())
             }
            })          
      }
}


export const startPostUnlikes = (id)=>{
     return (dispatch)=>{
        axios.post(`/posts/unlikes/${id}`, {},  {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('post unlike', response.data)
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)
                 
             } else {
                alert('Successfully updated unlike')
                dispatch(startGetPosts())
             }
        })     
    }
}


export const startGetPost = (id)=>{
    return (dispatch)=>{
         axios.get(`/posts/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('postsAction get response', response.data)
            dispatch(setPosts(response.data))
        })
        .catch(err=>{
            console.log('postsAction startGetPosts error', err)
        })
    }
}


export const startPostComment = (id, data)=>{
     return (dispatch)=>{
        axios.post(`/posts/comment/${id}`, data,  {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('post comments', response.data)
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)            
             } else {
                alert('Successfully posted comment')
                dispatch(startGetPosts())
             }
         })    
    }
}


export const startDeleteComment = (id, data)=>{
     return (dispatch)=>{
        axios.post(`/post/comment/${id}`, data,  {
            headers : {
                'Authorization' : localStorage.getItem('tokenWorkLife')
            }
        })
        .then(response=>{
            console.log('deleted comment', response.data)
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)                 
             } else {
                alert('Successfully deleted comment')
                dispatch(startGetPosts())
             }
        })             
        .catch(err=>{
            console.log(err)
        })
    }
}


export const setPosts= (data)=>{
    console.log('entered setPosts func')
    return { type : 'SET_POSTS', payload : data}
}