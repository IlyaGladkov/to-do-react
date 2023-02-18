import React from 'react'
import cl from './MyButtonAdd.module.css'

export default function MyButtonAdd({...props}) {
  return (
    <button {...props} className={cl.myBtnAdd}>
        Add
    </button>
  )
}
