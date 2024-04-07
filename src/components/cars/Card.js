import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ car }) => {
  return (
    <div className="card text-center">
      <div className="card-header">
        {car.slug}
      </div>
      <div className="card-body">
        <h5 className="card-title">{car.brand} - {car.model}</h5><br></br>
        <span className="card-text">Manufacturer: {car.brand}.</span><br></br>
        <span className="card-text">Model: {car.model}.</span><br></br>
        <span className="card-text">Color: {car.color}.</span><br></br>
        <span className="card-text">Year: {car.year}.</span><br></br>
        <span className="card-text">Transmission: {car.transmission}.</span><br></br>
        <span className="card-text">category: {car.category}.</span><br></br><br></br>
        <Link to='/cars' className='btn btn-outline-primary'>Back</Link>
      </div>
      <div className="card-footer text-body-secondary">
        <span className="card-text">Created: {car.created_at}.</span><br></br>
        <span className="card-text">Edited: {car.updated_at}.</span>
      </div>
    </div>
  )
}
