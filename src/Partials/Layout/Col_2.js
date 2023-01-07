import React from 'react'
import { flexRowCenter } from '../../Assets/Style/Flex'

export default function Col_2({left,right, styleR = {}}) {
  return (
    <div className='container'>
        <div className='row py-3'>
            <div className='col-sm-6 position-relative py-5' style={flexRowCenter} >
                {left}
            </div>
            <div className='col-sm-6 py-5' style={styleR}>
                {right}
            </div>
        </div>  
    </div>
  )
}
