import React from 'react'
import { Pagination } from '../Pagination'

export const ResultsTable = ({ vehicles, previous, next }) => {
  return (
    <div>
      <div className='row result-table mt-3'>
        {
          vehicles.map((vehicle) => {
            return (
              <div key={vehicle.id} className='col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4'>
                <div className="card">
                  <img src="https://www.nissanlatam.com/Catalogos/versa2020/peru/images/color/6.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.searchable_type}</h5>
                    <p className="card-text">{vehicle.content}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <Pagination previous={previous} next={next} />
    </div>
  )
}
