import React, { useState } from 'react'
import './App.css';
// rafc
const Task = (props) => {
  return (
    <div className='singletask'>
      
      <div className='first'>
      <p>{props.index+1 + ' .'} </p>
      <p className={props.items.complete ? 'styling' : '' }  id = {props.items.notified ? 'change' : ''} >  {" " + props.items.task } 
      </p>
      </div>

      <div id='btns'>
        <button onClick={()=>props.notify(props.items.id,props.items.notified)} ><i className="fa-solid fa-bell"></i></button>
        <button onClick={() => props.remove(props.items.id)}> <i className="fa-solid fa-xmark"></i></button>


        <div className='checking'>
          <button onClick={() => props.checked(props.items.id, props.items.complete)}><i class="fa-regular fa-circle-check"></i></button>

        </div>
      </div>
    </div>
  )
}

export default Task