import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth-context';

import { Button, TextField, Typography } from '@mui/material';
import { ButtonContainer, InputContainer, MainContainer } from './styles';

const ChangePassword = () => {
  const authCtx = useContext(AuthContext);

  const [newPassword, setNewPassword] = useState<string>('');

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const submitNewPasswordHandler = (event: any) => {
    event.preventDefault();

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      alert('Deu certo!!!');
      console.log(res);
    });
  };

  return (
    <MainContainer>
      <Typography
        variant='h2'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Change Password
      </Typography>
      <InputContainer>
        <TextField
          sx={{ width: '300px' }}
          id='outlined-required'
          label='New Password'
          value={newPassword}
          onChange={passwordChangeHandler}
          type={'password'}
        />
      </InputContainer>
      <ButtonContainer>
        <Button
          sx={{ width: '300px' }}
          variant='contained'
          size='large'
          onClick={submitNewPasswordHandler}
        >
          Change Password
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default ChangePassword;
