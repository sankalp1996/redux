import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from '../action/action';

const Counter = () => {

    const mystate = useSelector((stat1)=>stat1.ChangeCounter)
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <div>
            
            <button className='btn btn-primary m-3' name="incr" onClick={()=>dispatch(incNumber())}>+</button>
            <span>{mystate}</span>

            <button className='btn btn-primary m-3' name="decr" onClick={()=>dispatch(decNumber())}>-</button>
        </div>

      
    </div>
  )
}

export default Counter
