import React from 'react'
import {Link} from 'react-router-dom'

const Checkout = ({Basket, SendConfirm}) =>{
    
    var basketItems = Basket.map(function(element,index){
       return( 
           <tr key={index}>
               <td>{element.name}</td>
               <td>{element.price}</td>
               <td>{element.qua}</td>
               <td>{element.price * element.qua}</td>
            </tr>
       )
    })

    var SubTotal = 0
     Basket.forEach(function(element) {
        SubTotal += element.qua * element.price
    })
    
    return(
    <div className ="col-md-6">

        <h3> Basket </h3> 
        <table className="table">
            <thead>
                <tr>
                   <th>Item</th> 
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Total</th> 
                </tr>
            </thead>
            <tbody>
                {basketItems}
            </tbody>
        </table>
        The Subtotal is: {SubTotal}
        <br/>
        <Link onClick={SendConfirm} to={"/goodbye"}> Confirm</Link>
        <br/>
        <Link to={"/"}> Go Back</Link>

    </div>
)

}

export default Checkout