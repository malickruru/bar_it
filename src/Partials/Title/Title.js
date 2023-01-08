import React from 'react'

export default function Title({title,subTitle,disable = false}) {

  if (disable) {
    return (
      <>
      <h1 className='bit-h1' >{title}</h1>
      <p className='bit-st' style={{textIndent : '3em'}}>{subTitle}</p>
      </>
    )
  }
  return (
    <>
    <h1 className='bit-h1' data-aos="fade-right"
     
     data-aos-easing="ease-in-sine">{title}</h1>
    <p className='bit-st' style={{textIndent : '3em'}} data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"
     >{subTitle}</p>
    </>
  )
}
