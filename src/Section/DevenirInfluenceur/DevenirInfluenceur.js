import React, { useEffect, useRef, useState } from 'react'

import { HiSpeakerWave,HiArrowLeftCircle, HiPlus } from "react-icons/hi2";
import Bouton from '../../Partials/Bouton/Bouton';
import { flexColumn, flexRight, flexRowAround, flexRowBetween, flexRowCenter, flexRowEvenly } from '../../Assets/Style/Flex';
import { BsFacebook, BsInstagram, BsTwitter, BsXLg } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function DevenirInfluenceur() {
    
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
                <input className='contact-input' type={'text'} placeholder={"Telephone"}/>
                <input className='contact-input' type={'text'} placeholder={'Votre domaine'}/>

            </form>
            <form style={{...flexColumn}}>
                
                <div>
                    <BsInstagram/>
                    <input className='contact-input insta' style={{width :'80%'}}   type={'text'} placeholder={"Votre compte Instagram"}/>
                </div>
                <div>
                    <BsFacebook/>
                    <input className='contact-input insta' style={{width :'80%'}}   type={'text'} placeholder={"Votre compte Facebook"}/>
                </div>
                <div>
                    <BsTwitter/>
                    <input className='contact-input insta' style={{width :'80%'}}   type={'text'} placeholder={"Votre compte Twitter"}/>
                </div>
                <div>
                    <FaTiktok/>
                    <input className='contact-input insta' style={{width :'80%'}}   type={'text'} placeholder={"Votre compte Tik Tok"}/>
                </div>
                <div style={{width : '70%'}} className='roboto-thin'>
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
