import { useState } from 'react';

import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import {
  FormContainer,
  ButtonContainer,
  CircularProgressContainer,
} from './styles';

const Form: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e: any) => {
    e?.preventDefault();
    setIsLoading(true);

    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
    }

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          setIsLoading(false);
          alert(res.error.message);
        } else {
          alert('Deu Bom!');
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert('Não conseguimos bater na API');
      });
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
        <TextField
          required
          id='outlined-required'
          label='Email'
          value={email}
          onChange={emailChangeHandler}
        />

        <TextField
          required
          id='outlined-password-input'
          label='Password'
          type='password'
          value={password}
          onChange={passwordChangeHandler}
        />
        {isLogin ? (
          <ButtonContainer>
            {!isLoading && (
              <Button variant='contained' size='large' onClick={submitHandler}>
                Login
              </Button>
            )}
            {isLoading && (
              <CircularProgressContainer>
                <CircularProgress />
              </CircularProgressContainer>
            )}
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
            {!isLoading && (
              <Button variant='contained' size='large' onClick={submitHandler}>
                Create Account
              </Button>
            )}
            {isLoading && (
              <CircularProgressContainer>
                <CircularProgress />
              </CircularProgressContainer>
            )}
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
