import React from 'react'
import { render } from 'react-dom'
import ClassComponent from './componets/ClassComponent'
import {Stateless} from './componets/Stateless'



window.React = React

render(
<div className="container">
    <ClassComponent/>
</div>
    ,

      document.getElementById('reactor-container')
)