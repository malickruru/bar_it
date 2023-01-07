import React from 'react'
import ImageGrid from '../../Partials/ImageGrid/ImageGrid'
import Title from '../../Partials/Title/Title'

export default function Ambiance() {
  return (
    <>
    <div className='container'>
        <div className='row py-3'>
            <Title title={"Ambiance"} subTitle={"Notre perimetre d action"}/>
            <ImageGrid/>
        </div>  
    </div>
    
    </>
  )
}
