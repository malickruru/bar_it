import React from 'react'

export default function Col_4({one,two,three,four,style = [{},{},{},{}],anchor=''}) {
    if (anchor= 'bottom') {
        return (
            <div className='container'>
                <div className='row '>
                    <div className='col-md-3 py-2'  style={style[0]} data-aos="fade-up" data-aos-offset="100" data-anchor-placement='top-bottom'>
                        {one}
                    </div>
                    <div className='col-md-3 py-2' style={style[1]} data-aos="fade-up" data-aos-offset="150" data-anchor-placement='top-bottom'>
                        {two}
                    </div>
                    <div className='col-md-3 py-2' style={style[2]} data-aos="fade-up" data-aos-offset="200" data-anchor-placement='top-bottom'>
                        {three}
                    </div>
                    <div className='col-md-3 py-2 ' style={style[3]} data-aos="fade-up" data-aos-offset="250" data-anchor-placement='top-bottom'>
                        {four}
                    </div>
                </div>  
            </div>
          )
    }
  return (
    <div className='container'>
        <div className='row py-3'>
            <div className='col-sm-3 py-3'  style={style[0]} data-aos="fade-up" data-aos-offset="100">
                {one}
            </div>
            <div className='col-sm-3 py-3' style={style[1]} data-aos="fade-up" data-aos-offset="150">
                {two}
            </div>
            <div className='col-sm-3 py-3' style={style[2]} data-aos="fade-up" data-aos-offset="200">
                {three}
            </div>
            <div className='col-sm-3 py-3' style={style[3]} data-aos="fade-up" data-aos-offset="250">
                {four}
            </div>
        </div>  
    </div>
  )
}
