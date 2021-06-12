import React,{Component} from "react";
import {Button} from "antd";
import './App.less'


export default class App extends Component{
 render() {
   return(
       <div>Hello
       <Button type="primary">点我</Button>
       </div>
   )
 }
}

