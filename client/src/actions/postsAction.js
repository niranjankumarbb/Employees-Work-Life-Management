import axios from 'axios'

export const startPostPost = (formData)=>{
    console.log('postsAction entered startPostPosts')
  return (dispatch)=>{
      axios.post('/posts', formData, {
        headers : {
            'Authorization': localStorage.getItem('tokenWorkLife')
        }
      })
      .then(response=>{
          console.log('postsAction post response' ,response.data)
        // sessionStorage.setItem('workLifeProfileId', response.data._id)
       //   dispatch(startGetProfile(response.data._id))
          dispatch(startGetPosts())
      })

    
      .catch(err=>{
          console.log('postsAction startPostPosts error', err)
      })
  }
}
 


export const startGetPosts = ()=>{
    return (dispatch)=>{
       // console.log('startGetPost id value', id)
        console.log('startGetPosts just before making axios.get')
        axios.get(`/posts`, {
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





export const startRemovePosts= (id, redirect)=>{
    console.log('entered postsAction startRemovePosts')
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
          //  redirect()
        })
      
    }
}

 
export const startPostLikes = (id)=>{
    console.log('posts action likes entered')
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
             //   redirect()
            }
            })
             
        
    }
}


export const startPostUnlikes = (id)=>{
    console.log('posts action unlikes entered')
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
             //   redirect()
            }
            })
             
        
    }
}

export const startGetPost = (id)=>{
    return (dispatch)=>{
       // console.log('startGetPost id value', id)
        console.log('startGetPost just before making axios.get')
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
    console.log('startPostComment data value',data)
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
             //   redirect()
            }
            })
             
        
    }
}


export const startDeleteComment = (id, data)=>{
    console.log('startDeleteComment data value',data)
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
             //   redirect()
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