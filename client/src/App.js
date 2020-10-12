import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import {connect } from 'react-redux'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Activities from './components/Activities'
import Activities1 from './components/Activities1'
import Profile from './components/Profile'
import Tasks from './components/Tasks'
import Schedule from './components/Schedule'
import ScheduleDisplay from './components/ScheduleDisplay'
import post from './components/post/post'
import SPost from './components/single-post/SPost'
import Employees from './components/Employees'
import {startLogout} from './actions/userAction'
import {Navbar, Nav} from 'react-bootstrap'
 
function App(props){

 const handleClick= ()=>{
   props.dispatch(startLogout())
 }
  
    return (
     <div >
        <BrowserRouter>
       {(Object.keys(props.user).length>0)? (
          <div>
             <Navbar bg="info" variant="dark">
               <Navbar.Brand href="#">Employees work-life management app</Navbar.Brand>
               <Nav className="ml-auto">
               <Nav.Link href='/home'>Home</Nav.Link>
               <Nav.Link href='/profile'>Profile</Nav.Link>
               <Nav.Link href='/activities'>Activities</Nav.Link>
               <Nav.Link href='/schedule'>Schedule</Nav.Link>
               <Nav.Link href='/allprofiles'>Employees</Nav.Link>
               <Nav.Link href='/post'>Post</Nav.Link>
               <Nav.Link href='#' onClick={handleClick}>Logout</Nav.Link>
               </Nav>
            </Navbar>
          
           <Route path='/home' component={Home} exact={true}/>
           <Route path='/profile' component={Profile} />
           <Route path='/activities' component={Activities}  />
           <Route path='/activities1' component={Activities1}  />
           <Route path='/schedule' component={Schedule} />
           <Route path='/tasks' component={Tasks} />
           <Route path='/scheduleDisplay' component={ScheduleDisplay} />
           <Route path='/allprofiles' component={Employees} />
           <Route path='/post' component={post} exact={true} />
           <Route path='/post/:id' component={SPost} />
      
         </div>       
        ):(
           <div >
               <Navbar bg="info" variant="dark">
                <Navbar.Brand href="#">Employees work-life management app</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>    
                </Nav>
            </Navbar>
         
           <Switch> 
           <Route path='/' component={Home} exact={true}/>
           <Route path='/login' component={Login}  />
           <Route path='/register' component={Register}  />
           </Switch>
         </div>
         )}  
      </BrowserRouter>
       </div>
   )
}
const mapStateToProps = (state)=>{
 return {
       user : state.user 
 }
}
export default connect(mapStateToProps)(App)