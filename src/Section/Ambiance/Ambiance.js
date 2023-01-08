import React from 'react'
import ImageGrid from '../../Partials/ImageGrid/ImageGrid'
import Title from '../../Partials/Title/Title'

export default function Ambiance() {
  return (
    <>
    <div className='container'>
        <div className='row py-3'>
            <Title title={"Ambiance"} subTitle={"Notre périmetre d'action"} disable={true}/>
            <ImageGrid/>
        </div>  
    </div>
    
    </>
  )
}
