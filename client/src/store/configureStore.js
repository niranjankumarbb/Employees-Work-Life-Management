import redux from 'redux'
import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import profileReducer from '../reducers/profileReducer'
import usersReducer from '../reducers/usersReducer'
import tasksReducer from '../reducers/tasksReducer'
import postsReducer from '../reducers/postsReducer'
import allProfilesReducer from '../reducers/allProfilesReducer'

const configureStore =()=>{
    const store =  createStore(combineReducers({
        profile : profileReducer,
        allProfiles: allProfilesReducer,
         user : usersReducer,
         tasks: tasksReducer,
         posts: postsReducer
   }),applyMiddleware(thunk))
   return store
}
export default configureStore