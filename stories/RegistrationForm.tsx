import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div``;

const RegistrationForm = () => {
  const { register } = useForm();
  return (
    <Wrapper>
      <input data-testid='email' type='email' placeholder='zzz@gmail.com' {...register('email')} />
      <input data-testid='password' type='password' placeholder='비밀번호' {...register('password')} />
    </Wrapper>
  );
};

export default RegistrationForm;
