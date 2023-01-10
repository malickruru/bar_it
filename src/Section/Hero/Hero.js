import React from 'react'
import { flexColumnEnd } from '../../Assets/Style/Flex'
import Bouton from '../../Partials/Bouton/Bouton'
import './Hero.css'

export default function Hero({image,bottom = '50px'}) {
  return (
    <div className='Hero position-relative' style={{...flexColumnEnd,backgroundImage :'url('+image+')' }}>
        <a style={{bottom : bottom}} href='#contact'>
          <Bouton text={'Contactez-nous'}/>
        </a>
    </div>
  )
}
