import { useState } from 'react';

import { Button, TextField, Typography } from '@mui/material';
import { ButtonContainer, InputContainer, MainContainer } from './styles';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const passwordChangeHandler = (event: any) => {
    setNewPassword(event.target.value);
  };

  const submitNewPasswordHandler = () => {
    console.log('Ueon');
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
