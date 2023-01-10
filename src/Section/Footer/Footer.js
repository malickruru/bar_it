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
        anchor='bottom'
        one={
            <div className='footer-col'>
                <img
                  height={80}
                  src="/logo.png"
                />
                <p style={{fontWeight : 50}} className='roboto'>
                    Copyright &copy; 2022 lebar it.<br/>
                    Tous les droits sont réservés.<br/>
                    Designed & Developed by lebar IT 
                </p>
            </div>
        }
        two={
            <div  className='footer-col'>
                <h4 className='roboto-bold'>Heure d'ouverture:</h4>
                <p style={{fontWeight : 50}} className='roboto'>
                    Lundi - vendredi: 8h30 - 18h<br/>
                    Samedi : 8h30 - 12h<br/>
                    Dimanche: Fermé
                </p>
            </div>
        }
        three={
            <div  className='footer-col'>
                <h4 className='roboto-bold'>Adresse:</h4>
                <p style={{fontWeight : 50}} className='roboto'>
                    Paris - Abidjan - Madagascar<br/>
                </p>
            </div>
        }
        four={
            <div  className='footer-col ' >
                <h4 className='roboto-bold'>Contact:</h4>
                <p style={{fontWeight : 50}} className='roboto'>
                    + 33 7 69 61 92 12<br/>
                    <a className='footer-link roboto' href='mailto:contactbar.it@lebar-it.com'>contactbar.it@lebar-it.com</a>
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
