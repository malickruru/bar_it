import React from 'react'
import Slider from 'react-slick';
import './RealisationSection.css'

export default function RealisationSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 3,
        slidesPerRow: 3,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesPerRow: 1,
              }
            }
          ]
      };
  return (
    <div className='pt-5 container'>
        <Slider {...settings} >
            <div className='RealisationCard' style={{margin : "20px"}}>
                <img src='https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4247834/file/original-e68f51e79335c2fe4c87a14eac6631e0.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4250995/file/original-7ac26afebf1f1251239dc59d6e652ee5.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4250572/file/original-a4a7ce7f9d8578c373bec09fde973f84.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4249967/file/original-7cfd90c8548cbbd6a8f3ebbba2df18c9.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/3923506/file/original-20aa9ff3628561a0dc13ca844b989358.png?compress=1&resize=1504x1128' />
            </div>
            <div className='RealisationCard'>
                <img src='https://cdn.dribbble.com/userupload/4248050/file/original-c96282e6d3fd01c1a8e24dcf9d51ffed.png?compress=1&resize=1504x1128' />
            </div>
        </Slider >
    </div>
  )
}
