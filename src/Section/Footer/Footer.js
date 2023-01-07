import React from 'react'
import { flexColumnEnd } from '../../Assets/Style/Flex'
import Col_4 from '../../Partials/Layout/Col_4'
import './Footer.css'

function bold({text}){
    <b>{text}</b>
}

export default function Footer() {
  return (
    <div className='container-fluid footer' >
        <Col_4 
        one={
            <div className='footer-col'>
                <img
                  height={120}
                  src="/logo.png"
                />
                <p style={{fontWeight : 'lighter'}}>
                    Copyright &copy; <b>2022</b> lebar it.<br/>
                    Tous les droits sont réservés.<br/>
                    Designed & Developed by lebar IT 
                </p>
            </div>
        }
        two={
            <div  className='footer-col'>
                <h5>Heure d'ouverture:</h5>
                <p style={{fontWeight : 'lighter'}}>
                    Lundi - vendredi: 8h30 - 18h<br/>
                    Samedi : 8h30 - 12h<br/>
                    Dimanche: Fermé
                </p>
            </div>
        }
        three={
            <div  className='footer-col'>
                <h5>Adresse:</h5>
                <p style={{fontWeight : 'lighter'}}>
                    Paris - Abidjan - Madagascar<br/>
                </p>
            </div>
        }
        four={
            <div  className='footer-col' >
                <h5>Contact:</h5>
                <p style={{fontWeight : 'lighter'}}>
                    +225 07 67 76 47 49<br/>
                    contactbar.it@gmail.com
                </p>
            </div>
        }
        style={
            [
                {},
                flexColumnEnd,
                flexColumnEnd,
                flexColumnEnd
            ]
        }
        />
    </div>
  )
}
