import React from 'react'
import { flexAlignStart, flexColumn, flexLeft, flexRowAround, flexRowCenter } from '../../Assets/Style/Flex'
import Bouton from '../../Partials/Bouton/Bouton'
import Col_2 from '../../Partials/Layout/Col_2'
import './Contact.css'

export default function Contact() {
  return (
    <Col_2
    id='contact'
    left={
        <div >
        <p className='roboto-bold'>Des projets en tête ? n'hesitez pas<br/> à
        nous contacter ou <span className='roboto-bold'  style={{color : "#F27289"}}>juste nous faire un coucou. </span> </p>
            <div style={flexColumn} className='contact-card' id='left-card'>
                <div  style={{...flexLeft,width : "80%"}} className="p-2">
                    <img src='/img/Action/location-pin.png'/>
                    <div style={{marginLeft :'10px'}}>
                        <h5 className='m-0 roboto-bold'>Adresse</h5>
                        <span className='roboto'>Paris-Abidjan-Madagascar</span>
                    </div>
                </div>
                <div style={{...flexLeft,width : "80%"}} className="p-2">
                    <img src='/img/Action/email.png'/>
                    <div style={{marginLeft :'10px'}}>
                        <h5 className='m-0 roboto-bold'>Adresse mail</h5>
                        <span  className='roboto'>contactbar.it@lebar-it.com</span>
                    </div>
                </div>
            </div>
        </div>
    }
    right={
        <div className='contact-card'>
            <h5 className='text-center roboto-bold'>Envoyez nous <br/> un message</h5>
            <form style={flexColumn}>
                <input className='contact-input' type={'text'} placeholder={'Nom prenom'}/>
                <input className='contact-input' type={'text'} placeholder={'Adresse mail'}/>
                <input className='contact-input' type={'text'} placeholder={'Telephone'}/>
                <select className='contact-input'>
                    <option value={'.'} >Sujet</option>
                    <option value={"J'ai une question"} >J'ai une question</option>
                    <option value={"J'ai un projet"} >J'ai un projet</option>
                    <option value={'Je veux proposer mes services au bar IT'} >Je veux proposer mes services au bar IT</option>
                </select>
                <textarea className='contact-input' placeholder={'Message'}/>
                <Bouton text={"Envoyer"} rounded='-rounded' />
            </form>
        </div>
    }
    flex={[{},flexRowCenter]}/>
  )
}
