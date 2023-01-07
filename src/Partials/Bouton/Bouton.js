
import React from 'react'
import './Bouton.css'


export default function Bouton({text,rounded = ""}) {
  return (
    <button className={"bit-btn"+rounded} s>{text}</button>
  )
}
