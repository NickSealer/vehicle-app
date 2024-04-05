import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='py-5' style={{textAlign: 'center'}}>
      <h1>Not Found Page</h1>
      <NavLink to='/'>
        <img src='https://i.kinja-img.com/gawker-media/image/upload/s--_1vNZW3z--/c_scale,fl_progressive,q_80,w_800/rso86fytcmhs44euxob2.gif' style={{borderRadius: 5}} alt='not-found'/>
      </NavLink>
    </div>
  )
}
