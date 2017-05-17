import React from 'react'
import {Component } from 'react'
import {Stateless} from './Stateless'

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

    upDateBasket(element){
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
           // Lenght of Basket is not 0, and added element is not a existing one!
           if(!foundAMatch){
           var newBasket = preState.Basket
           newBasket.push({name: element.name, qua:1, price: element.price})
           }
        })
    }




    render(){
            var listItems = this.state.StoreItem.map((element,index) =>{
                return(

                <li className="list-group-item" key={index}>
                    Name: {element.name} - Price {element.price} 
                    <input className="btn btn-primary btn-xs" onClick={() => this.upDateBasket(element)} type="button" value="Add One"/>
                </li>
                )
            })

        return(
            <div className="ComponetDiv">
                <div className="row">
                    <div className="col-md-6">

                            <h2>Friut Store</h2>
                    <h3>Pick some Items you want to your basket!</h3>
                    <ul className="list-group">
                        {listItems}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <Stateless basket= {this.state.Basket} />
                    </div>

                </div>

            </div>

        )
    }


}

export default ClassComponent