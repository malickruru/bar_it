import React from 'react'
import Card from '../../Partials/Card/Card'
import Col_4 from '../../Partials/Layout/Col_4'
import Title from '../../Partials/Title/Title'
import './Action.css'


export default function Action() {
  return (
    <>
    <div className='container'>
        <div className='row py-3'>
            <Title title={'Ce que nous faisons'} subTitle="Notre périmetre d'action"/>
        </div>  
    </div>
    <Col_4 
    one={
        <Card title='Site web' 
        subTitle="Vitrine & e-commerce"
        image="/img/Action/navigateur-web.png"/>
    }
    two={
        <Card title='Applications' 
        subTitle="Android & IOS"
        image="/img/Action/application.png"/>
    }
    three={
        <Card title='Logiciels' 
        subTitle="Métier"
        image="/img/Action/navigateur-web.png"/>
    }
    four={
        <Card title='Entreprise' 
        subTitle="ressource planning"
        image="/img/Action/presentation-commerciale.png"/>
    }
    />
    </>
  )
}
