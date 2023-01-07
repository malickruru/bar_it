import React from 'react'
import Slider from 'react-slick';
import Card from '../../Partials/Card/Card';
import Title from '../../Partials/Title/Title';

export default function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className:'ProjectSlide',
    // centerMode:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
      };
  return (
    <>
    <div className='container'>
        <div className='row py-3'>
            <Title title={'Notre team'} subTitle='Qualifie et motive'/>
        </div>  
    </div>
    <div className='container'>
        <div className='row py-3'>
        <Slider {...settings} >
          <Card 
          w="200px"
          imgH={75}
          // textAlign={'left'}
          title='Juliette aka Mina' 
          subTitle="Fondatrice, chef de projet IT"
          image="https://media.licdn.com/dms/image/D4E03AQHsS0XH4SR1AQ/profile-displayphoto-shrink_800_800/0/1667004646741?e=1678320000&v=beta&t=ZlSADxPZwIU_KSHvsaMHg8NxD9RvNRX878hjnVs5Pcg"/>
        
        <Card 
        w="200px"
        imgH={75}
        // textAlign={'left'}
        title='Marcel' 
          subTitle="Ux designer, Développeur front "
          image="https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <Card 
        w="200px"
        imgH={75}
        textAlign={'left'}
        title='Finoana' 
          subTitle=" Développeur Fullstack "
          image="https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <Card
        w="200px"
        imgH={75}
        textAlign={'left'}
        title='Logan' 
          subTitle="Architecte resaux "
          image="https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

      <Card
      w="200px"
      imgH={75}
      // textAlign={'left'}
       title='Juliette aka Mina' 
          subTitle="Fondatrice, chef de projet IT"
          image="https://media.licdn.com/dms/image/D4E03AQHsS0XH4SR1AQ/profile-displayphoto-shrink_800_800/0/1667004646741?e=1678320000&v=beta&t=ZlSADxPZwIU_KSHvsaMHg8NxD9RvNRX878hjnVs5Pcg"/>
        
        <Card 
        w="200px"
        imgH={75}
        // textAlign={'left'}
        title='Marcel' 
          subTitle="Ux designer, Développeur front "
          image="https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <Card 
        w="200px"
        imgH={75}
        textAlign={'left'}
        title='Finoana' 
          subTitle=" Développeur Fullstack "
          image="https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <Card
        w="200px"
        imgH={75}
        textAlign={'left'}
         title='Logan' 
          subTitle="Architecte resaux "
          image="https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        
        </Slider >
        </div>  
    </div>
    </>
  )
}
