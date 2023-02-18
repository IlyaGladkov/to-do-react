import React from 'react'
import cl from './MyButtonDel.module.css'

export default function MyButton({...props}) {
  return (
    <button {...props} className={cl.myBtnDel}>
        Delete
    </button>
  )
}
