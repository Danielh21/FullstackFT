import React from 'react'
import {Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Shop from './Shop'
import Checkout from './Checkout'
import ThanksComponet from './ThanksComponet'


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
       var dummyItems = [
            {name:"Hello", price: 2},
            {name:"Grete", price: 40}
        ]
        setTimeout(() =>{
        this.setState({StoreItem: dummyItems})
        },1000)
    }

    SendConfirm = () =>{
        console.log("To be send: " + this.state.Basket)
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