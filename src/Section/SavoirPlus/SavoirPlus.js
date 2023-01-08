import React from 'react'
import { Link } from 'react-router-dom'
import { flexRowCenter } from '../../Assets/Style/Flex'
import Bouton from '../../Partials/Bouton/Bouton'
import Col_2 from '../../Partials/Layout/Col_2'
import "./SavoirPlus.css"

const Page = [
    {
        id : 1,
        titre : "Besoin d'un site web ?",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        link:"/",
        image : "/img/hero/2.png"
    },
    {
        id : 2,
        titre : "Qu'est ce que c'est un Social Bar ?",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        link:"/SocialBar",
        image : "/img/hero/1.png"
    },
    {
        id : 3,
        titre : "Qu'est ce que le bar a influence ?",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        link:"/BarInfluence",
        image : "/img/hero/3.png"
    }
]

function SavoirPlusCard ({obj}){
    return (
        <div className='sp-card position-relative'>
            <img src={obj.image} className='carte-img '/>
            <div className='content position-absolute'>
            <h6 >
                {obj.titre}
            </h6>
                
                    <p className='roboto'>
                    {obj.text}
                    </p>
                    <Link to={obj.link}>
                        <Bouton text={"En savoir plus"}/>
                    </Link>
                </div>
            </div>
    )
}

export default function SavoirPlus({a,b}) {
  return (
    <Col_2 left={
        <SavoirPlusCard obj={Page[a]}/>
    } 
    right={
        <SavoirPlusCard obj={Page[b]}/>
    }
    styleR = {flexRowCenter}/>
  )
}
