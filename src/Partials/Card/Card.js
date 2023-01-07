import React from 'react'
import './Card.css'


export default function Card({title,subTitle,image,textAlign = 'center', w = 'auto', imgH =50}){
    return (
        <div className='Card' style={{width : w}}>
            <img src={image} height={imgH}/>
            <h4 style={{textAlign : textAlign}}>
            {title}
            </h4>
            <h6 style={{textAlign : textAlign}}>
            {subTitle}
            </h6>    
        </div>
    )
}
