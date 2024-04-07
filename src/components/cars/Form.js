import React from 'react'

export const Form = ({ car = null, handleAction, refs }) => {
  const carPresented = car ? true : false;

  return (
    <form onSubmit={e => handleAction(car, e)} id='car-form'>
      <div className='row'>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[brand]' className='form-label'>Brand</label>
            <input type='text' className='form-control' id='car[brand]' ref={refs && refs.carBrand} name='car[brand]' defaultValue={carPresented ? car.brand : ''} placeholder='Example brand'/>
            <div className='form-text'>Brand or manufacturer of the car.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[model]' className='form-label'>Model</label>
            <input type='text' className='form-control' id='car[model]' ref={refs && refs.carModel} name='car[model]' defaultValue={carPresented ? car.model : ''} placeholder='Example model'/>
            <div className='form-text'>Only the model name.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[color]' className='form-label'>Color</label>
            <input type='text' className='form-control' id='car[color]' ref={refs && refs.carColor} name='car[color]' defaultValue={carPresented ? car.color : ''} placeholder='Color'/>
            <div className='form-text'>May be multiple.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-3'>
            <label htmlFor='car[year]' className='form-label'>Year</label>
            <input type='text' className='form-control' id='car[year]' ref={refs && refs.carYear} name='car[year]' defaultValue={carPresented ? car.year : ''} placeholder='2000'/>
            <div className='form-text'>Model year.</div>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-5'>
            <label htmlFor='car[transmission]' className='form-label'>Transmission</label>
            <select className='form-select' id='car[transmission]' ref={refs && refs.carTransmission} name='car[transmission]' defaultValue={carPresented ? car.transmission : ''}>
              <option value='MT'>Manual Transmission</option>
              <option value='AT'>Automatic Transmission</option>
            </select>
          </div>
        </div>
        <div className='col-6'>
          <div className='mb-5'>
            <label htmlFor='car[category]' className='form-label'>Category</label>
            <select className='form-select' id='car[category]' ref={refs && refs.carCategory} name='car[category]' defaultValue={carPresented ? car.category : ''}>
              <option value='Convertible'>Convertible</option>
              <option value='Coupe'>Coupe</option>
              <option value='Electric Car'>Electric Car</option>
              <option value='Hatchback'>Hatchback</option>
              <option value='Hybrid'>Hybrid</option>
              <option value='Luxury Car'>Luxury Car</option>
              <option value='Luxury SUV'>Luxury SUV</option>
              <option value='Sedan'>Sedan</option>
              <option value='Sport Car'>Sport Car</option>
              <option value='SUV'>SUV</option>
              <option value='Truck'>Truck</option>
              <option value='Van'>Van</option>
            </select>
          </div>
        </div>
      </div>
      <div className='form-actions'>
        <button type='submit' className='btn btn-outline-success'>Save</button>
        <button type='button' className='btn btn-outline-secondary' data-bs-dismiss='modal'>Close</button>
      </div>
    </form>
  )
}
