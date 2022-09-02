import { Typography } from '@mui/material';
import Form from '../../components/Form';
import { LoginContainer } from './styles';

const Login = () => {
  return (
    <LoginContainer>
      <Typography variant='h3' align='center' marginBottom='50px'>
        Login Page
      </Typography>
      <Form />
    </LoginContainer>
  );
};

export default Login;
