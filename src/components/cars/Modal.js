import React from 'react'
import { Form } from './Form';

export const Modal = ({ car, action, handleAction, refs }) => {
  const initProperties = (action) => {
    let properties = {};

    if (action === 'put') {
      properties.car = car
      properties.title = `${car.brand} - ${car.model}`
      properties.id = `put-${car.id}`
      properties.text = 'Update'
    } else {
      properties.car = {}
      properties.title = 'Create new Car'
      properties.id = 'create-new-car'
      properties.text = 'Create New Car'
    }
    return properties;
  }

  let properties = initProperties(action);

  return (
    <div>
      <button type='button' className='btn btn-outline-warning' data-bs-toggle='modal' data-bs-target={`#${properties.id}`}>
        {properties.text}
      </button>

      <div className='modal fade' id={properties.id} data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content text-center'>
            <div className='modal-header '>
              <h1 className='modal-title fs-5'>{properties.title}</h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <Form car={car} handleAction={handleAction} refs={refs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
