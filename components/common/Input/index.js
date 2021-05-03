import { useState } from 'react';
import ErrorMsg from '../ErrorMsg';
import InputPage from './page';

const Input = ({
  value,
  setValue,
  label,
  maxLength,
  minLength,
  link,
  max,
  min,
  errorMaxLength,
  errorMinLength,
  errorMax,
  errorMin,
  errorEmail,
  errorNumeric,
  errorLink,
  type,
}) => {
  const [errorMsg, setErrorMsg] = useState();

  const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const numericRegEx = /^([0-9]*$)/;
  const linkRegex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  const validateLength = (newValue) => {
    if (minLength && newValue.length < minLength) {
      setErrorMsg(errorMinLength || `It should be more than ${minLength}`);
    }
    if (maxLength && newValue.length > maxLength) {
      setErrorMsg(errorMaxLength || `It should be less than ${maxLength}`);
    }
  };

  const validateMaxMin = (newValue) => {
    if (max && type == 'numeric' && newValue > max) {
      setErrorMsg(errorMax || `Should be a number less than ${max}`);
    }
    if (min && type == 'numeric' && newValue < min) {
      setErrorMsg(errorMin || `Should be a number more than ${min}`);
    }
  };

  const validateEmail = (newValue) => {
    if (type == 'email' && !emailRegEx.test(newValue)) {
      setErrorMsg(errorEmail);
    }
  };

  const validateNumeric = (newValue) => {
    if (type == 'numeric' && !numericRegEx.test(newValue)) {
      setErrorMsg(errorNumeric || `It should be numbers`);
    }
  };

  const validateLink = (newValue) => {
    if (link && !linkRegex.test(newValue)) {
      setErrorMsg(errorLink || `Link invalid`);
    }
  };

  const validateAll = (newValue) => {
    validateEmail(newValue);
    validateLength(newValue);
    validateNumeric(newValue);
    validateMaxMin(newValue);
    validateLink(newValue);
  };

  const setValueHandler = (e) => {
    setErrorMsg('');
    setValue(e.target.value);
    validateAll(e.target.value);
  };

  const Label = () => {
    return label ? <label>{label}</label> : null;
  };

  const Error = () => {
    return errorMsg ? <ErrorMsg msg={errorMsg} /> : null;
  };

  return (
    <InputPage
      value={value}
      setValue={setValueHandler}
      Error={Error}
      Label={Label}
      type={type}
    />
  );
};

export default Input;
