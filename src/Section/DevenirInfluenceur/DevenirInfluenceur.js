import React, { useEffect, useRef, useState } from 'react'
import './DevenirInfluenceur.css'
import { HiSpeakerWave,HiArrowLeftCircle, HiPlus } from "react-icons/hi2";
import Bouton from '../../Partials/Bouton/Bouton';
import { flexColumn, flexRight, flexRowAround, flexRowBetween, flexRowCenter, flexRowEvenly } from '../../Assets/Style/Flex';
import { BsXLg } from "react-icons/bs";

export default function DevenirInfluenceur() {
    const [resau, setResau] = useState([]);
    const [translate, setTranslate] = useState(false);
    
    function translationValue(){
        if (!translate) {
            return 0
        }else{
            return 95
        }
    } 
    const form = useRef(null)

    

  return (
    <>
    <div className='form-infuenceur' ref={form}>
        <div className='call_to_action' style={{color : '#F27289'}}>
        <HiSpeakerWave/>
        <p className='p-0 m-0 desktop-only ' style={{writingMode : 'vertical-rl'}}>
            DEVENIR INFLUENCEUR
        </p>
        <p 
        className='p-0 m-0 mobile-only-block'  
        style={{writingMode : 'vertical-rl'}} 
        onClick={() => {
            form.current.style.transform = "translateX("+translationValue()+"%)";
            setTranslate(!translate)
        }}
        >
            DEVENIR INFLUENCEUR
        </p>
        <HiArrowLeftCircle/>
        

        </div>

        <div className='w-100 p-5'>
        <div className='w-100 p-2 close-inf' >
        <div onClick={() => {
            form.current.style.transform = "translateX(95%)";
            setTranslate(false)
        }}>
            <BsXLg/>
        </div >
        </div >
            <h4 className='text-center p-2'>Rejoindre le réseau de nos
            <span style={{color : "#F27289"}}> infuenceur africain</span></h4>
            <div className='influenceur-layout'  >
            <form style={{...flexColumn}}>
                <div style={flexRowAround}>
                <input className='contact-input' type={'radio'} name="sexe" value='femme' checked/> <label for="femme">femme</label>
                <input className='contact-input' type={'radio'} name="sexe" value='homme' /> <label for="homme">homme</label>
                </div>
                <input className='contact-input' type={'text'} placeholder={'Vos noms et prénoms'}/>
                <input className='contact-input' type={'text'} placeholder={'Pays'}/>
                <input className='contact-input' type={'text'} placeholder={'E-mail'}/>
                <div style={flexRowEvenly}>
                <input className='contact-input' style={{width : '95%'}} type={'text'} placeholder={"Ajouter un réseau social"}/>
                <div 
                onClick={() => {
                        var tab = [...resau, 1]
                        setResau(tab)
                    }} 
                    >
                    <HiPlus style={{cursor :'pointer'}} />
                </div>
                
                
                </div>
                {
                resau.map((e,i) => <input key={i} className='contact-input' type={'text'} placeholder={"Ajouter un réseau social"}/>)
                }
                <input className='contact-input' type={'text'} placeholder={"Telephone"}/>

            </form>
            <form style={{...flexColumn}}>
                <input className='contact-input' type={'file'} placeholder={'votre photo'}/>
                <input className='contact-input' type={'text'} placeholder={'Votre domaine'}/>
                <input className='contact-input' type={'text'} placeholder={'Lien de votre site web'}/>
                
                <div style={{width : '70%'}} className='roboto'>
                    <input className='m-2' type={'checkbox'} placeholder={'Lien de votre site web'} style={{display : 'inline'}}/>
                En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées afin de traiter ma demande.* 
                </div>
                
            </form>
            </div>
            <div className='w-100 my-3' style={flexRowCenter}>
            <Bouton text={"Nous rejoindre"} rounded='-rounded' />
            </div>
        </div>
    </div>
    
    </>
  )
}
