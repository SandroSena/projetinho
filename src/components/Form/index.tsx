import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { FormContainer, ButtonContainer } from './styles';

const Form: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { margin: 1.2, width: '40ch' },
      }}
      autoComplete='off'
    >
      {isLogin ? (
        <Typography
          variant='h3'
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Login
        </Typography>
      ) : (
        <Typography
          variant='h3'
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Register
        </Typography>
      )}
      <FormContainer>
        <TextField required id='outlined-required' label='Email' />
        <TextField
          required
          id='outlined-password-input'
          label='Password'
          type='password'
        />
        {isLogin ? (
          <ButtonContainer>
            <Button variant='contained' size='large'>
              Login
            </Button>
            <Button
              variant='contained'
              size='large'
              onClick={() => switchModeHandler()}
            >
              Register
            </Button>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <Button variant='contained' size='large'>
              Create Account
            </Button>
            <Button
              variant='contained'
              size='large'
              onClick={() => switchModeHandler()}
            >
              Login with existing account
            </Button>
          </ButtonContainer>
        )}
      </FormContainer>
    </Box>
  );
};

export default Form;
