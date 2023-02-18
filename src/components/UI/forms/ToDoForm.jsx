import React, { useState } from 'react'
import MyInput from '../input/MyInput'
import MyButtonAdd from '../MyButton/MyButtonAdd/MyButtonAdd'
import cl from './ToDoForm.module.css'

export default function ToDoForm({create}) {
    const [toDoItem, setToDoItem] = useState({title: '', body: ''})

    function addNewToDo(e) {
        e.preventDefault()
    
        const newToDo = {
            ...toDoItem, id: Date.now()
        }
        create(newToDo)
        setToDoItem({title: '', body: ''})
    }

    return (
        <form className={cl.myForm}>
            <h1 className={cl.headerAdd}>New to-do</h1>
            <MyInput
                value={toDoItem.title}
                onChange={e => setToDoItem({...toDoItem, title: e.target.value})}
                type="text"
                placeholder='This is title...'
            />
            <MyInput
                value={toDoItem.body}
                onChange={e => setToDoItem({...toDoItem, body: e.target.value})}
                type="text"
                placeholder='This is description...'
            />
            <MyButtonAdd onClick={addNewToDo}></MyButtonAdd>
        </form>
    )
}
