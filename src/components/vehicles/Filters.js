import React from 'react'

export const Filters = ({onClickAction}) => {
  return (
    <div className='form-checks search-box filters'>
      <label className='form-check-label' id="vehicle_type_all">
        <input onClick={e => onClickAction(e.target.value)} className='form-check-input' type="radio" name="vehicle_type" id="vehicle_type_all" value="all" defaultChecked />All
      </label>
      <label className='form-check-label' id="vehicle_type_car">
        <input onClick={e => onClickAction(e.target.value)} className='form-check-input' type="radio" name="vehicle_type" id="vehicle_type_car" value="car" />Car
      </label>
      <label className='form-check-label' id="vehicle_type_helicopter">
        <input onClick={e => onClickAction(e.target.value)} className='form-check-input' type="radio" name="vehicle_type" id="vehicle_type_helicopter" value="helicopter" />Helicopter
      </label>
      <label className='form-check-label' id="vehicle_type_motorbike">
        <input onClick={e => onClickAction(e.target.value)} className='form-check-input' type="radio" name="vehicle_type" id="vehicle_type_motorbike" value="motorbike" />Motorbike
      </label>
      <label className='form-check-label' id="vehicle_type_plane">
        <input onClick={e => onClickAction(e.target.value)} className='form-check-input' type="radio" name="vehicle_type" id="vehicle_type_plane" value="plane" />Plane
      </label>
      <label className='form-check-label' id="vehicle_type_ship">
        <input onClick={e => onClickAction(e.target.value)} className='form-check-input' type="radio" name="vehicle_type" id="vehicle_type_ship" value="ship" />Ship
      </label>
    </div>
  )
}
