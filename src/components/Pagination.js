import React from 'react'

export const Pagination = ({previous, next}) => {
  return (
    <div className='pagination'>
      <button type='button' className='btn btn-outline-primary' onClick={previous}>Previous</button>
      <button type='button' className='btn btn-outline-primary' onClick={next}>Next</button>
    </div>
  )
}
