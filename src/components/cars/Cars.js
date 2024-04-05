import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Table } from '../Table';
import { Loading } from '../Loading';
import axios from 'axios';

export const Cars = () => {
  const [cars, setCars] = useState();
  const [status, setStatus] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getCars = async () => {
        const response = await axios.get('http://localhost:3001/api/v1/cars', {
          params: {
            page: page
          }
        });
        setStatus(response.status);
        setCars(response.data.cars);
        navigate(`/cars?page=${page}`)
      }
      getCars();
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }, [page, navigate]);

  const handleNextPage = () => {
    if (cars.length >= 10) {
      setPage(page + 1);
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <>
      {status === 200 ? (
        <Table data={cars} resource='cars' next={handleNextPage} previous={handlePreviousPage} />
      ) : (
        <Loading />
      )}
    </>
  )
}
