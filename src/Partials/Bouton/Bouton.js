
import React from 'react'



export default function Bouton({text,rounded = "",onclick}) {
  return (
    <button className={"bit-btn"+rounded} onClick={onclick}>{text}</button>
  )
}
