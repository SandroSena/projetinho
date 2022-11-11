import { useState, useContext } from 'react';

import AuthContext from '../../context/auth-context';

import { useNavigate } from 'react-router-dom';

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
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event: any) => {
    event?.preventDefault();
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
      .then((result) => {
        const expirationTime = new Date(new Date().getTime() + +result.expiresIn * 1000);
        authCtx.onLogin(result.idToken, expirationTime.toISOString());
        console.log(result);

        if (result.error) {
          setIsLoading(false);
          alert(result.error.message);
        } else {
          alert('Deu Bom!!!');
          navigate('/');
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert('Não conseguimos bater na API!!!');
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
              Login with existing account please
            </Button>
          </ButtonContainer>
        )}
      </FormContainer>
    </Box>
  );
};

export default Form;
