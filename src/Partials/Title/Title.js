import React from 'react'

export default function Title({title,subTitle}) {
  return (
    <>
    <h1 className='bit-h1'>{title}</h1>
    <p className='bit-st' style={{textIndent : '3em'}}>{subTitle}</p>
    </>
  )
}
