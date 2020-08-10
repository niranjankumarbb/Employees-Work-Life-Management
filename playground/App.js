import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
//import spinner from '/images/spinner.svg'
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
import Navbar from 'react-bootstrap/Navbar'
// import './style.css'

function App(props){

 const handleClick= ()=>{
   props.dispatch(startLogout())
 }
 console.log(localStorage.getItem('tokenWorkLife'))
 
 console.log('props.user value' , props.user)
   return (
     <div className="container">
        <BrowserRouter>
       {(Object.keys(props.user).length>0)? (
          <div>
             <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#">Employees work-life management app</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/profile'>Profile</Nav.Link>
                <Nav.Link href='/activities'>Activities</Nav.Link>
                <Nav.Link href='/schedule'>Schedule</Nav.Link>
                <Nav.Link href='/post'>Post</Nav.Link>
                <Nav.Link href='/allprofiles'>Employees</Nav.Link>
                <Nav.Link href='#'>Logout</Nav.Link>
                </Nav>
            </Navbar>
           {/* <Link to='/' className="btn btn-link">Home</Link> |
           <Link to='/profile' className="btn btn-link">Profile</Link> |
           <Link to='/activities' className="btn btn-link">Activities</Link> |
           <Link to='/schedule' className="btn btn-link">Schedule</Link> |
           <Link to='/post' className="btn btn-link">Post</Link> |
           <Link to='/allprofiles' className="btn btn-link">Employees</Link> |
 
           <Link to='#' onClick={handleClick} className="btn btn-link">Logout</Link> */}

           <Route path='/' component={Home} exact={true}/>
           <Route path='/profile' component={Profile} />
           <Route path='/activities' component={Activities}  />
           <Route path='/activities1' component={Activities1}  />
           <Route path='/schedule' component={Schedule} />
           <Route path='/tasks' component={Tasks} />
           <Route path='/scheduleDisplay' component={ScheduleDisplay} />
           <Route path='/post' component={post} exact={true} />
           <Route path='/allprofiles' component={Employees} />
           <Route path='/post/:id' component={SPost} />

      
         </div>            
          
         ):(
           <div >
           <Link to='/' className="btn btn-link">Home</Link> |
           <Link to='/login' className="btn btn-link">Login</Link> |
           <Link to='/register' className="btn btn-link">Register</Link>

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