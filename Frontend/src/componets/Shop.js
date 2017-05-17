import React from 'react'
import {Link} from 'react-router-dom'
import BasketComponet from './BasketComponet'


const Shop = ({StoreItem, Basket, upDateBasket}) =>{
    var listItems = StoreItem.map((element,index) =>{
                return(
                <li className="list-group-item" key={index}>
                    Name: {element.name} - Price {element.price} 
                    <input className="btn btn-primary btn-xs" 
                    onClick={() => upDateBasket(element)} type="button" value="Add One"/>
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