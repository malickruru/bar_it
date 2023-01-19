import React from 'react'



export default function Card({dataAos = "" , dataAosOffset = "" , title,subTitle,image,textAlign = 'center', w = 'auto', imgH =50 , component}){
    return (
        <div className='Card' style={{width : w}} data-aos={dataAos} data-aos-offset = {dataAosOffset}>
            <img src={image} height={imgH}/>
            <h4 style={{textAlign : textAlign}}>
            {title}
            </h4>
            <h6 style={{textAlign : textAlign}}>
            {subTitle}
            </h6>
            {component}
        </div>
    )
}
