import React from 'react'
import { Cars } from '../../components/cars/Cars'

export const Index = () => {
  return (
    <div className='py-5'>
      <div className='float-right'>
        Here should be the create button to open a modal that contains the form
      </div>
      <Cars />
    </div>
  )
}
