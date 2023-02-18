import React from 'react'
import cl from './ModalTask.module.css'

export default function ModalTask({...props}) {
  return (
    <div className={cl.ModalTask}>
      <div className={cl.headerBox}>
        <h1 className={cl.numberTask}>{props.task.number}</h1>
        <h1 className={cl.headerTask}>{props.task.title}</h1>
      </div>
      <p className={cl.bodyTask}>{props.task.body}</p>
    </div>
  )
}
