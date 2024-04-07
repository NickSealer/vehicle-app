import React from 'react'
import { ModalDetails } from '../ModalDetails'
import { Link } from 'react-router-dom'
import { Pagination } from '../Pagination'
import { Delete } from './Delete'
import { Update } from './Update'

export const Table = ({ data, next, previous }) => {
  return (
    <>
      <div className='table-responsive'>
        <h4 className='text-center'>Cars</h4>
        <table className='table table-hover'>
          <thead className='table-success'>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Color</th>
              <th>Year</th>
              <th>Transmission</th>
              <th>Category</th>
              <th style={{width: '0%'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((car) => {
                return (
                  <tr key={car.id}>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                    <td>{car.year}</td>
                    <td>{car.transmission}</td>
                    <td>{car.category}</td>
                    <td className='actions'>
                      <ModalDetails vehicle={car} />
                      <Link to={`/cars/${car.id}`} className='btn btn-outline-primary' >Show</Link>
                      <Update car={car} />
                      <Delete id={car.id} cars={data} />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <Pagination previous={previous} next={next}/>
    </>
  )
}
