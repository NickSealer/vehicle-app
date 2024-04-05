import React from 'react'

export const ModalDetails = ({ vehicle }) => {
  return (
    <div>
      <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target={`#${vehicle.id}`}>
        Open
      </button>

      <div className="modal fade" id={vehicle.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content text-center">
            <div className="modal-header ">
              <h1 className="modal-title fs-5">{vehicle.brand} - {vehicle.model}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              This {vehicle.year} {vehicle.brand} {vehicle.model}, in a striking {vehicle.color} hue,
              represents versatility and dependability. Classified as a {vehicle.category} category, its sleek
              design and comfortable interior make it an attractive option. Equipped with an automatic or manual
              transmission, depending on the variant, it ensures a smooth driving experience. With its timeless
              appeal and practical features, this {vehicle.brand} {vehicle.model} shines across various modes
              of transportation.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
