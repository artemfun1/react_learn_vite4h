import { useEffect, useRef } from 'react'
import './Modal.css'
import { createPortal } from 'react-dom'


export default function Modal({children,open, }){

  useEffect(()=>{
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
    
  },[open])

  const dialog = useRef()




  return createPortal(
    <dialog ref={dialog} >{children}</dialog>, document.getElementById('modal')
  )
}