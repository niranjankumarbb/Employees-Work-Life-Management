import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetTasks} from './actions/tasksAction'
import {startGetUser } from './actions/userAction'
// import { startGetProfile,startGetAllProfiles} from './actions/profileAction'
import { startGetPosts} from './actions/postsAction'


const store= configureStore()


store.subscribe(()=>{
    console.log('store value', store.getState())
})

//handle page reloads
if(localStorage.getItem('tokenWorkLife')){
    store.dispatch(startGetUser())
     if(store.getState().profile.length>0){
        // store.dispatch(startGetAllProfiles())
        store.dispatch(startGetTasks())
        store.dispatch(startGetPosts())
    }
}
 
const ele = (
    <Provider store={store}>
        <App/>
    </Provider>     
) 

ReactDOM.render(ele, document.getElementById('root'))