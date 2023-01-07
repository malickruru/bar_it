import React from 'react'
import Bouton from '../../Partials/Bouton/Bouton'
import Card from '../../Partials/Card/Card'
import Col_4 from '../../Partials/Layout/Col_4'
import Title from '../../Partials/Title/Title'

export default function Influenceur() {
  return (
    <>
    <div className='container'>
        <div className='row py-3'>
            <Title title={"Nos Influenceurs"} subTitle={"Lorem ipsum set dolor"}/>
        </div>  
        <Col_4 
        one={
            <Card subTitle="Communication - Marketing - Journalisme" 
            image="https://images.pexels.com/photos/3602934/pexels-photo-3602934.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton text="Il m'intéresse"/>  
            }
            />
        }
        two={
            <Card subTitle="Marketing management" 
            image="https://images.pexels.com/photos/7676824/pexels-photo-7676824.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton text="Elle m'intéresse"/>  
            }
            />
        }
        three={
            <Card subTitle="Communication " 
            image="https://images.pexels.com/photos/8276328/pexels-photo-8276328.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton text="Il m'intéresse"/>  
            }
            />
        }
        four={
            <Card subTitle="Journalisme" 
            image="https://images.pexels.com/photos/7481973/pexels-photo-7481973.jpeg?auto=compress&cs=tinysrgb&w=600" 
            textAlign='left'
            imgH={90}
            component={
                <Bouton text="Il m'intéresse"/>  
            }
            />
        }
        />
    </div>
    
    </>
  )
}
