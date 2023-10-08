import React from 'react'
import { DataContext } from './App'

function InsideCard() {

    const values = React.useContext(DataContext)

    console.log(values,'ddd');

    let result =   values.filter((item,index)=> index < 5 && item.strMeal  )

    let uiResult = result.map((item)=> <div className="" style={{backgroundColor:"whitesmoke",color:"black",padding:"8px 5px",borderRadius:"6px",margin:"3px"}}>{item.strMeal}</div> )

  return (
    <div>InsideCard {uiResult}</div>
  )
}

export default InsideCard