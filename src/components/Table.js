import React from 'react'
import { ModalDetails } from './ModalDetails'
import { Link } from 'react-router-dom'
import { Pagination } from './Pagination'

export const Table = ({ data, resource, next, previous }) => {
  return (
    <>
      <div className='table-responsive'>
        <h4>{resource}</h4>
        <table className='table table-hover'>
          <thead className='table-success'>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Color</th>
              <th>Year</th>
              <th>Transmission</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((record) => {
                return (
                  <tr key={record.id}>
                    <td>{record.brand}</td>
                    <td>{record.model}</td>
                    <td>{record.color}</td>
                    <td>{record.year}</td>
                    <td>{record.transmission}</td>
                    <td>{record.category}</td>
                    <td className='actions'>
                      <ModalDetails vehicle={record} />
                      <Link to={`/${resource}/${record.id}`} className='btn btn-outline-primary' >Show</Link>
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
