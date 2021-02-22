import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {lable: 'Salad' , type :  'salad'},
    {lable: 'Bacon' , type :  'bacon'},
    {lable: 'Cheese' , type :  'cheese'},
    {lable: 'Meat' , type :  'meat'}
]

const buildControls = (props) => (

<div className={classes.BuildControls}>

    <p> Current price : <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map (ctrl => (<BuildControl 
  
     added= {() => props.ingredientAdded(ctrl.type)} 
     removed ={ () => props.ingredientRemoved(ctrl.type)}
     key ={ctrl.lable} 
     lable={ctrl.lable} 
     disabled={props.disabled[ctrl.type]}
     />
     
     ))
     
     }
     <button className={classes.OrderButton}
     disabled ={ !props.purchasable}>Order Now</button>
</div>

    )

export default buildControls