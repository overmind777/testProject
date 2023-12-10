import React, { useState } from 'react';

import {
  ButtonStyled,
  FormStyled,
  InputMileageLeft,
  InputMileageRight,
  StyledInput1,
  StyledInput2,
  Wrapper,
  WrapperButton,
  WrapperInput,
  WrapperMileage,
} from './Filter.styled';

const Filter = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState(null);
  const [mileageTo, setMileageTo] = useState(null);

  const handleOnChange = e => {
    switch (e.target.id) {
      case 'brand':
        setBrand(e.target.value);
        break;
      case 'price':
        setPrice(e.target.value);
        break;
      case 'mileageFrom':
        setMileageFrom(e.target.value);
        break;
      case 'mileageTo':
        setMileageTo(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(brand, price, mileageFrom, mileageTo);
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <WrapperInput>
          <label htmlFor="brand">Car brand</label>
          <StyledInput1
            onChange={handleOnChange}
            id="brand"
            type="text"
            placeholder="Enter the text"
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="price">Price/ 1 hour</label>
          <StyledInput2
            onChange={handleOnChange}
            id="price"
            type="text"
            placeholder="To $"
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="mileageFrom">Сar mileage / km</label>
          <WrapperMileage>
            <InputMileageLeft
              onChange={handleOnChange}
              id="mileageFrom"
              type="text"
              placeholder="From"
            />
            <InputMileageRight
              onChange={handleOnChange}
              id="mileageTo"
              type="text"
              placeholder="To"
            />
          </WrapperMileage>
        </WrapperInput>
        <WrapperButton>
          <ButtonStyled>Search</ButtonStyled>
        </WrapperButton>
      </FormStyled>
    </Wrapper>
  );
};

export default Filter;
