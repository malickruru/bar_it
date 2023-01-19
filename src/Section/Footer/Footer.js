import React from 'react'
import { flexColumnStart } from '../../Assets/Style/Flex'
import Col_4 from '../../Partials/Layout/Col_4'


function bold({text}){
    <b>{text}</b>
}

export default function Footer() {
  return (
    <div className='container-fluid footer' >
        <Col_4 
        anchor='bottom'
        one={
            <div  >
                <img
                  height={60}
                  src="/logo.png"
                />
                <p style={{fontWeight : 100,fontSize : 14}} className='roboto'>
                    Copyright &copy; 2022 lebar it.<br/>
                    Tous les droits sont réservés.<br/>
                    Designed & Developed by lebar IT 
                </p>
            </div>
        }
        two={
            <div className='pt-4' >
                <h5 className='roboto-bold'>Heure d'ouverture:</h5>
                <p style={{fontWeight : 100,fontSize : 14}} className='roboto'>
                    Lundi - vendredi: 8h30 - 18h<br/>
                    Samedi : 8h30 - 12h<br/>
                    Dimanche: Fermé
                </p>
            </div>
        }
        three={
            <div className='pt-4' >
                <h5 className='roboto-bold'>Adresse:</h5>
                <p style={{fontWeight : 100,fontSize : 14}} className='roboto'>
                    Paris - Abidjan - Madagascar<br/>
                </p>
            </div>
        }
        four={
            <div  className='pt-4' >
                <h5 className='roboto-bold'>Contact:</h5>
                <p style={{fontWeight : 100,fontSize : 14}} className='roboto'>
                    + 33 7 69 61 92 12<br/>
                    <a className='footer-link roboto' href='mailto:contactbar.it@lebar-it.com'>contactbar.it@lebar-it.com</a>
                </p>
            </div>
        }
        style={
            [
                flexColumnStart,
                flexColumnStart,
                flexColumnStart,
                flexColumnStart
            ]
        }
        />
    </div>
  )
}
