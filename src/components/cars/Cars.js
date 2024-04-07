import axios from '../../Axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Table } from './Table';
import { Loading } from '../Loading';

export const Cars = () => {
  const [cars, setCars] = useState();
  const [status, setStatus] = useState(0);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getCars = async () => {
        const response = await axios.get('cars', {
          params: {
            page: page
          }
        });
        setStatus(response.status);
        setCars(response.data.cars);
        setNextPage(response.data.metadata.next_page)
        setPreviousPage(response.data.metadata.previous_page)
        navigate(`/cars?page=${page}`)
      }
      getCars();
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }, [page, navigate]);

  const handleNextPage = () => {
    if (nextPage) {
      setPage(parseInt(nextPage));
    }
  }

  const handlePreviousPage = () => {
    if (previousPage) {
      setPage(parseInt(previousPage));
    }
  }

  return (
    <>
      {status === 200 ? (
        <Table data={cars} next={handleNextPage} previous={handlePreviousPage} />
      ) : (
        <Loading />
      )}
    </>
  )
}
