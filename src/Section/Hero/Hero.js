import React from 'react'
import { flexColumn, flexColumnEnd } from '../../Assets/Style/Flex'
import Bouton from '../../Partials/Bouton/Bouton'
import './Hero.css'

export default function Hero({image}) {
  return (
    <div className='Hero' style={{...flexColumnEnd,backgroundImage :'url('+image+')' }}>
        <Bouton text={'Contactez nous'}/>
    </div>
  )
}
