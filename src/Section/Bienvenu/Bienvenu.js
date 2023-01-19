import React from 'react'
import DotGrid from '../../Assets/svg/dotGrid'
import Col_2 from '../../Partials/Layout/Col_2'


export default function Bienvenu({image,titre,paragraphe,smallTitle = '' }) {
  return (
    <Col_2 
    left={
        <>
          <img src={image} className="bienvenu-img" />
          <DotGrid style={{position : 'absolute', right : 0, bottom : -10 , zIndex : -1}}/>  
        </>
     }

    right={
        <>
          <h1 className={'bit-h1'+smallTitle} >{titre}</h1>
          <p className='bienvenu-p'>{paragraphe}</p>
        </>
     }
    />
  )
}
