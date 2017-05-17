import React from 'react'

export const Stateless = ({basket}) => {
    
    var basketList = basket.map(function(element,index){
        return(
            <li key={index}>
                {element.qua}x  {element.name} {element.price} DKK
            </li>
        )
    })
    
    return(

<div>
    <h3>
     Your Basket:
    </h3>
    <p>{basketList}</p>
</div>
)}