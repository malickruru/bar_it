import React from 'react'
import { flexRowCenter } from '../../Assets/Style/Flex'

export default function Col_2({left,right, flex = [flexRowCenter,{}], id = ""}) {
  return (
    <div className='container' id={id}>
        <div className='row py-3' >
            <div className='col-sm-6 position-relative py-5' data-aos="fade-right" style={flex[0]} >
                {left}
            </div>
            <div className='col-sm-6 py-5' data-aos="fade-left" style={flex[1]}>
                {right}
            </div>
        </div>  
    </div>
  )
}
