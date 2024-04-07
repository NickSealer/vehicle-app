import axios from '../../Axios'
import React, { useRef, useState } from 'react'
import { Modal } from './Modal';
import Validations from './Validations';
import { redirect } from 'react-router-dom';

export const Update = ({car}) => {
  const [carUpdated, setCarUpdated] = useState();
  const [status, setStatus] = useState(0);
  const carBrand = useRef('carBrand');
  const carModel = useRef('carModel');
  const carColor = useRef('carColor');
  const carYear = useRef('carYear');
  const carTransmission = useRef('carTransmission');
  const carCategory = useRef('carCategory'); 
  const refs = {
    carBrand: carBrand,
    carModel: carModel,
    carColor: carColor,
    carYear: carYear,
    carTransmission: carTransmission,
    carCategory: carCategory
  }

  const handleErrorColor = (valid, ref) => {
    return valid ? ref.current.style.borderColor = '#dee2e6' : ref.current.style.borderColor = 'red'
  }

  const validateFields = () => {
    const validBrand = Validations.validateString(carBrand.current.value);
    const validModel = Validations.validateString(carModel.current.value);
    const validColor = Validations.validateString(carColor.current.value);
    const validYear = Validations.validateYear(carYear.current.value);
    const validTransmission = Validations.validateTransmission(carTransmission.current.value);
    const validCategory = Validations.validateCategory(carCategory.current.value);

    handleErrorColor(validBrand, carBrand)
    handleErrorColor(validModel, carModel)
    handleErrorColor(validColor, carColor)
    handleErrorColor(validYear, carYear)
    handleErrorColor(validTransmission, carTransmission)
    handleErrorColor(validCategory, carCategory)

    if (validBrand && validModel && validColor && validYear && validTransmission && validCategory) {
      return true;
    } else {
      return false;
    }
  }

  const updateCar = async (car, e) => {
    e.preventDefault();

    if (validateFields()) {
      try {
        const response = await axios.put(
          `cars/${car.id}`,
          {
            brand: carBrand.current.value,
            model: carModel.current.value,
            color: carColor.current.value,
            year: carYear.current.value,
            transmission: carTransmission.current.value,
            category: carCategory.current.value
          }
        );
        setStatus(response.status)
        setCarUpdated(response.data.car)
        redirect(`/cars/${car.id}`)
      } catch (error) {
        alert(`Error: ${error}`)
      }
    } else {
      alert('Complete all fields without errors.')
    }
  }

  return (
    <Modal car={car} action='put' handleAction={updateCar} refs={refs}></Modal>
  )
}
