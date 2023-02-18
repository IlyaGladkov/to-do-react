import React from 'react'
import MyButtonDel from './UI/MyButton/MyButtonDel/MyButtonDel'

export default function ToDoItem({...props}) {
  return (
    <div className='to-do-item' onClick={() => {
      props.getTask({number: props.number,title: props.toDo.title, body: props.toDo.body})
    }}>
        <div className='to-do-item-content' onClick={() => {props.setVisibleModal()}}>
            <strong>{props.number}. {props.toDo.title}</strong>
            <div>{props.toDo.body}</div>
        </div>
        <MyButtonDel onClick={() => {props.remove(props.toDo)}}/>
    </div>
  )
}