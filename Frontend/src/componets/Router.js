import React from 'react'
import {Component } from 'react'
import ClassComponent from './ClassComponent'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Checkout from './Checkout'


class RouterComponent extends Component{
    
    render(){

    return(
        <Router>
            <div>

            <Route path="/" exact component={ClassComponent}></Route>
            <Route path="/checkout" component={Checkout}></Route>
            </div>
        </Router>
       )
    }
}

export default RouterComponent