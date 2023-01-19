import React, { useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import { flexColumn } from '../../Assets/Style/Flex'
import Bouton from '../../Partials/Bouton/Bouton'
import Card from '../../Partials/Card/Card'
import Col_4 from '../../Partials/Layout/Col_4'
import Title from '../../Partials/Title/Title'


export default function Influenceur() {
    const [showOverlay, setShowOverlay] = useState(false);
    const handleOverlayOpen = () => {
        setShowOverlay(true);
      };
    
      const handleOverlayClose = () => {
        setShowOverlay(false);
      };
  return (
    <>
    <div className='container'>
        <div className='row py-3'>
            <Title title={"Nos Influenceurs"} subTitle={"Lorem ipsum set dolor"}/>
        </div>  
        <Col_4 
        one={
            <Card subTitle="Communication - 50 abonnés" 
            image="https://images.pexels.com/photos/3602934/pexels-photo-3602934.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton onclick={handleOverlayOpen} text="Il m'intéresse"/>  
            }
            />
        }
        two={
            <Card subTitle="Marketing - 50 abonnés" 
            image="https://images.pexels.com/photos/7676824/pexels-photo-7676824.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton onclick={handleOverlayOpen} text="Elle m'intéresse"/>  
            }
            />
        }
        three={
            <Card subTitle="Communication - 50 abonnés" 
            image="https://images.pexels.com/photos/8276328/pexels-photo-8276328.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton onclick={handleOverlayOpen} text="Il m'intéresse"/>  
            }
            />
        }
        four={
            <Card subTitle="Journalisme - 50 abonnés" 
            image="https://images.pexels.com/photos/7481973/pexels-photo-7481973.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton onclick={handleOverlayOpen} text="Il m'intéresse"/>  
            }
            />
        }
        />
    </div>
    { showOverlay && (
  <div onclick={handleOverlayClose} className="overlay d-flex flex-column  align-items-center justify-content-center position-fixed w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.8)',zIndex : 9,backdropFilter : 'blur(5px)' }}>
    <form style={{...flexColumn,backgroundColor : '#fff',width : '50%'}} >
        <div onClick={handleOverlayClose} className='Influenceur-close'>
            <BsXLg/>
        </div >
        <select className='contact-input'>
            <option value={'.'} >Type de projet</option>
            <option value={"Campagne influence"} >J'ai une question</option>
            <option value={"Placement de produit"} >J'ai un projet</option>
        </select>
        <input className='contact-input' type={'text'} placeholder={'Adresse mail'}/>
        <input className='contact-input' type={'text'} placeholder={'Telephone'}/>
        <input className='contact-input' type={'text'} placeholder={'Nom prenom'}/>
        <textarea className='contact-input' placeholder={'Message'}/>
        <Bouton text={"Envoyer"} rounded='-rounded' />
    </form>
  </div>
) }
    </>
  )
}
