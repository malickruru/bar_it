import React from 'react'
import ScrollToTopButton from '../Partials/ScrollToTopButton/ScrollToTopButton'
import Action from '../Section/Action/Action'

import Bienvenu from '../Section/Bienvenu/Bienvenu'
import Contact from '../Section/Contact/Contact'
import Demarche from '../Section/Demarche/Demarche'
import Footer from '../Section/Footer/Footer'
import Hero from '../Section/Hero/Hero'
import Project from '../Section/Project/Project'
import SavoirPlus from '../Section/SavoirPlus/SavoirPlus'
import Team from '../Section/Team/Team'



export default function Home() {
  return (
    <>
      <Hero image={"/img/hero/2.png"}/>
      <Bienvenu 
        image={"/img/hero/2.png"} 
        paragraphe={`Introduction Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo, Nemo enim ipsam.
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores eos qui ratione voluptatem,
        ‘sequi nesciunt. Neque porro quisquam `}
        titre={'Bienvenue sur le bar it'}
        />
      <Action />
      <Project />
      <Team />
      <Demarche />
      <SavoirPlus a={2} b={1} />
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}
