import React from 'react'
import {Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Shop from './Shop'
import Checkout from './Checkout'
import ThanksComponet from './ThanksComponet'
import axios from 'axios'
const urlToFetch = "http://localhost:3000"



class ClassComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            StoreItem: [], 
            Basket: []
        }
        this.fetchStoreData()
    }

    fetchStoreData(){
        axios.get(`${urlToFetch}/api/store`)
       .then((response) =>{
        this.setState({StoreItem: response.data})
       })
       .catch(function(error){
           console.log("error in fetch!" + error)
       })
    }

    SendConfirm = () =>{
        axios.post(`${urlToFetch}/neworder`, {order: this.state.Basket})
        .then((response) =>{
            console.log("Server Responed with: " + response)
        })
        .catch(function(error){
            console.log("error in post" + error)
        })
    }

    upDateBasket = (element) =>{
        this.setState((preState) =>{
            if(preState.Basket.length === 0) return {Basket: [ {name: element.name, qua:1, price: element.price}]}
            var foundAMatch = false;
           preState.Basket.forEach((obj,index) =>{
                if(obj.name === element.name){
                    var newBasket = preState.Basket
                    newBasket[index].qua++
                    foundAMatch = true
                    return {Basket: newBasket}
                } 
           })
           if(!foundAMatch){
           // Lenght of Basket is not 0, and added element is not a existing one!
           var newBasket = preState.Basket
           newBasket.push({name: element.name, qua:1, price: element.price})
           }
        })
    }




    render(){
        return(
            <Router>
                <div>
                    {/*{<Route path="/" exact component={() => (<Shop
                     StoreItem={this.state.StoreItem} 
                     Basket= {this.state.Basket}
                     upDateBasket = {this.upDateBasket} />)}></Route>}*/}
                     <Route path="/" exact component = {() => (<Shop
                     StoreItem = {this.state.StoreItem}
                     Basket= {this.state.Basket}
                     upDateBasket = {this.upDateBasket}
                     />)}></Route>
                     <Route path="/checkout" component= {() => (<Checkout 
                     SendConfirm = {this.SendConfirm} 
                     Basket = {this.state.Basket} />)}></Route>
                     <Route path="/goodbye" component= {() => <ThanksComponet />}></Route>

                </div>
            </Router>
        )
    }


}

export default ClassComponent