import axios from '../../Axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading';
import { Card } from '../Card';

export const Car = () => {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    try {
      const getCar = async () => {
        const response = await axios.get(`cars/${id}`);
        setStatus(response.status);
        setCar(response.data.car);
      }
      getCar();
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }, [id]);

  return (
    <>
      {status === 200 ? (
        <Card vehicle={car} resource='cars' />
      ) : (
        <Loading />
      )}
    </>
  )
}
