import React from 'react'
import ScrollToTopButton from '../Partials/ScrollToTopButton/ScrollToTopButton'
import Bienvenu from '../Section/Bienvenu/Bienvenu'
import Contact from '../Section/Contact/Contact'
import Footer from '../Section/Footer/Footer'
import Hero from '../Section/Hero/Hero'
import SavoirPlus from '../Section/SavoirPlus/SavoirPlus'

export default function BarInfluence() {
  return (
    <>
    <Hero image={"/img/hero/3.png"}/>
    <Bienvenu 
        image={"/img/hero/3.png"} 
        paragraphe={`Parcequ une strategie d influence peut booster votre notoriete
        Ou vos ventes. lls vous faut mesurer les impacts et les KPI pour
        cela et fort de notre expertise, nous vous accompagnons.
        `}
        titre={"Qu'est-ce que le Bar a influence ?"}
        smallTitle = '-small'
        />
        <SavoirPlus a={1} b={0} />
        <Contact/>
        <Footer/>
        <ScrollToTopButton/>
    </>
  )
}
