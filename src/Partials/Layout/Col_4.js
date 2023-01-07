import React from 'react'

export default function Col_4({one,two,three,four,style = [{},{},{},{}]}) {
  return (
    <div className='container'>
        <div className='row py-3'>
            <div className='col-sm-3 py-3'  style={style[0]}>
                {one}
            </div>
            <div className='col-sm-3 py-3' style={style[1]}>
                {two}
            </div>
            <div className='col-sm-3 py-3' style={style[2]} >
                {three}
            </div>
            <div className='col-sm-3 py-3' style={style[3]}>
                {four}
            </div>
        </div>  
    </div>
  )
}
