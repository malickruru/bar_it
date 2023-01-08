import React from 'react'
import { flexColumnEnd } from '../../Assets/Style/Flex'
import Bouton from '../../Partials/Bouton/Bouton'
import './Hero.css'

export default function Hero({image}) {
  return (
    <div className='Hero' style={{...flexColumnEnd,backgroundImage :'url('+image+')' }}>
        <a href='#contact'>
          <Bouton text={'Contactez-nous'}/>
        </a>
    </div>
  )
}
