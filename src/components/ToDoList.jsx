import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ToDoItem from './ToDoItem'

export default function ToDoList({toDoItems, getTask, setVisibleModal, remove}) {
  return (
    <div className='to-do-list'>
      <TransitionGroup>
        {toDoItems.map( (toDO, index) => {
            return( 
              <CSSTransition
                key={toDO.id}
                timeout={500}
                classNames="toDo"
              >
                <ToDoItem setVisibleModal={setVisibleModal} getTask ={getTask} remove={remove} number={index + 1} toDo={toDO}/>
              </CSSTransition>    
            )
        })}
      </TransitionGroup>
    </div>
  )
}
