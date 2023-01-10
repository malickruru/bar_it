import React, { useEffect } from 'react'
import ScrollToTopButton from '../Partials/ScrollToTopButton/ScrollToTopButton'
import Contact from '../Section/Contact/Contact'
import Footer from '../Section/Footer/Footer'
import RealisationSection from '../Section/RealisationSection/RealisationSection'

export default function Realisation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
    <RealisationSection/>
    <Contact/>
    <Footer/>
    <ScrollToTopButton/>
    </>
  )
}
