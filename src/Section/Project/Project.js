import React from 'react'
import Title from '../../Partials/Title/Title'
import Slider from "react-slick";
import './Project.css'
 
export default function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
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
            <Title title={'Nos projets recents'} subTitle='Ils nous ont fait confiance 😄'/>
        </div>  
    </div>
    <div className='container'>
        <div className='row py-3'>
        <Slider {...settings} >
            <div className='ProjectCard'>
                <img src='https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128' />
            </div>
            <div className='ProjectCard'>
                <img src='https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128' />
            </div>
            <div className='ProjectCard'>
                <img src='https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128' />
            </div>
            <div className='ProjectCard'>
                <img src='https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128' />
            </div>
            <div className='ProjectCard'>
                <img src='https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128' />
            </div>
            <div className='ProjectCard'>
                <img src='https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128' />
            </div>
        </Slider >
        </div>  
    </div>
    </>
  )
}
