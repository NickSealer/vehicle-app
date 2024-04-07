import axios from '../../Axios'
import React, { useState } from 'react'

export const Delete = ({id, cars}) => {
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState(0);
  const [newCars, setNewCars] = useState([]);

  const deleteCar = async (id) => {
    try {
      const response = await axios.delete(
        `cars/${id}`
      );
      setStatus(response.status);
      setMessage(response.data.message)
      setNewCars(
        cars.filter((car) => {
          return car.id !== id
        })
      )
    } catch (error) {
      alert(`Error: ${error}`);
    }
    alert('Car deleted.')
  }

  const handleDelete = (id) => {
    let result = window.confirm("Are you sure?")

    if (result === true) {
      deleteCar(id);
    }
  }

  return (
    <div>
      <button onClick={e => handleDelete(id)} className='btn btn-outline-danger' data-confirm='hola?'>Delete</button>
    </div>
  )
}
