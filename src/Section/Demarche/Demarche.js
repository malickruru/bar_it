import React from 'react'
import Card from '../../Partials/Card/Card'
import Col_4 from '../../Partials/Layout/Col_4'
import Title from '../../Partials/Title/Title'


export default function Demarche() {
  return (
    <>
    <div className='container'>
        <div className='row py-3'>
            <Title title={'Processus de travail'} subTitle='Notre démarche'/>
        </div>  
    </div>
    <Col_4 
    one={
        <Card title='Collecte' 
        subTitle="d'informations"
        image="/img/Action/navigateur-web.png"/>
    }
    two={
        <Card title='Planification' 
        subTitle="d'idees"
        image="/img/Action/application.png"/>
    }
    three={
        <Card title='Analyse' 
        subTitle="de conception"
        image="/img/Action/navigateur-web.png"/>
    }
    four={
        <Card title='Conception' 
        subTitle="et réalisation"
        image="/img/Action/presentation-commerciale.png"/>
    }
    />
    </>
  )
}
