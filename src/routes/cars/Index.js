import React from 'react'
import { Cars } from '../../components/cars/Cars'
import { Create } from '../../components/cars/Create'

export const Index = () => {
  return (
    <div className='py-5'>
      <div className='text-end'>
        <Create />
      </div>
      <Cars />
    </div>
  )
}
