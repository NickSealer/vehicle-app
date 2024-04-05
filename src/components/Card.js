import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ vehicle, resource }) => {
  return (
    <div className="card text-center">
      <div className="card-header">
        {vehicle.slug}
      </div>
      <div className="card-body">
        <h5 className="card-title">{vehicle.brand} - {vehicle.model}</h5><br></br>
        <span className="card-text">Manufacturer: {vehicle.brand}.</span><br></br>
        <span className="card-text">Model: {vehicle.model}.</span><br></br>
        <span className="card-text">Color: {vehicle.color}.</span><br></br>
        <span className="card-text">Year: {vehicle.year}.</span><br></br>
        <span className="card-text">Transmission: {vehicle.transmission}.</span><br></br>
        <span className="card-text">category: {vehicle.category}.</span><br></br><br></br>
        <Link to={`/${resource}`} className='btn btn-outline-primary'>Back</Link>
      </div>
      <div className="card-footer text-body-secondary">
        <span className="card-text">Created: {vehicle.created_at}.</span><br></br>
        <span className="card-text">Edited: {vehicle.updated_at}.</span>
      </div>
    </div>
  )
}
