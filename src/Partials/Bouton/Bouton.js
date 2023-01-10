
import React from 'react'
import './Bouton.css'


export default function Bouton({text,rounded = "",onclick}) {
  return (
    <button className={"bit-btn"+rounded} onClick={onclick}>{text}</button>
  )
}
