import React from 'react'
import {Link} from 'react-router-dom'
import BasketComponet from './BasketComponet'


const Shop = ({StoreItem, Basket, upDateBasket}) =>{

    //Sorting out the unavailable
    var avalibleItems = StoreItem.filter((element, index) =>{ return element.available })
    var unavailableItems = StoreItem.filter((element, index) =>{ return !element.available })

    var listItems = avalibleItems.map((element,index) =>{
                return(
                <li className="list-group-item" key={index}>
                    Name: {element.name} - Price {element.price}
                    <input className="btn btn-primary btn-xs" 
                    onClick={() => upDateBasket(element)} type="button" value="Add One"/>
                </li>
                )
            })

    var unavailableList = unavailableItems.map((element,index)=>{
        return(
        <li className="list-group-item" key={index}>
             Name: {element.name} - Price {element.price}
             <span style={{color:"red"}}>  Unavailable</span> 
        </li>
        )
    })

    return(
        <div className= "row">
            <div className="col-md-5">
              <h2>Friut Store</h2>
            <h3>Pick some Items you want to your basket!</h3>
            <ul className="list-group">
                        {listItems}
                        {unavailableList}
                        </ul>
                <Link to={"/checkout"}> Checkout</Link>
            </div>
                <div className="col-md-offset-1 col-md-4">
                    <BasketComponet basket={Basket} />
                </div>
        </div>
    )
}

export default Shop