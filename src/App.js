import React,{Component} from "react";
import {Route,Switch} from 'react-router-dom'
import './App.less'
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";


export default class App extends Component{
 render() {
   return(
       <div className='app'>
           <Switch>
               <Route path='/login' component={Login}></Route>
               <Route path='/admin' component={Admin}></Route>
           </Switch>
       </div>
   )
 }
}

