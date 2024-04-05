import axios from 'axios';
import React, { useState } from 'react'
import { FormSearch } from './FormSearch';
import { ResultsTable } from './ResultsTable';
import { Filters } from './Filters';

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState();
  const [status, setStatus] = useState(0);
  let [query, setQuery] = useState('');
  let [page, setPage] = useState(1);
  let [vehicleType, setVehicleType] = useState('all');

  const getVehicles = async (query, vehicleType, page) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/search`, {
        params: {
          q: query,
          vehicle_type: vehicleType,
          page: page
        }
      })
      setStatus(response.status);
      setVehicles(response.data);
      setVehicleType(vehicleType);
      setQuery(query);
      setPage(page);
    } catch (error) {
      alert(`Error: ${error}`)
    }
  };

  const handleNextPage = () => {
    if (vehicles.data.length >= 10) {
      page += 1;
      getVehicles(query, vehicleType, page);
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      page -= 1;
      getVehicles(query, vehicleType, page);
    }
  }

  const sendQuery = async (e) => {
    e.preventDefault();

    query = document.getElementById('query-input').value

    if (query.length < 1) {
      return e.preventDefault();
    }

    await getVehicles(query, vehicleType, page);
  }

  const handleFilter = (value) => {
    getVehicles(query, value, 1)
  }

  return (
    <>
      <FormSearch clickFunction={sendQuery} />
      {status === 200 ? (
        <div className='mt-3'>
          <Filters onClickAction={handleFilter}/>
          <ResultsTable vehicles={vehicles.data} previous={handlePreviousPage} next={handleNextPage} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}
