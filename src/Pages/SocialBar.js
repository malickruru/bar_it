import React from 'react'
import Bienvenu from '../Section/Bienvenu/Bienvenu'
import Hero from '../Section/Hero/Hero'
import SavoirPlus from '../Section/SavoirPlus/SavoirPlus'
import Contact from '../Section/Contact/Contact'
import Footer from '../Section/Footer/Footer'
import ScrollToTopButton from '../Partials/ScrollToTopButton/ScrollToTopButton'
import Ambiance from '../Section/Ambiance/Ambiance'

export default function SocialBar() {
  return (
    <>
    <Hero image={"/img/hero/1.png"}/>
    <Bienvenu 
        image={"/img/hero/1.png"} 
        paragraphe={`Introduction Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo, Nemo enim ipsam.
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores eos qui ratione voluptatem,
        ‘sequi nesciunt. Neque porro quisquam `}
        titre={'Bienvenue au social bar'}
        />
        <Ambiance/>
        <SavoirPlus a={2} b={0} />
        <Contact/>
        <Footer/>
        <ScrollToTopButton/>
    </>
  )
}
