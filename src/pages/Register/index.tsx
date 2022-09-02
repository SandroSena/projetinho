import { Typography } from '@mui/material';
import Form from '../../components/Form';
import { RegisterContainer } from './styles';

const Register = () => {
  return <RegisterContainer>
    <Typography variant='h3' align='center'>Register Page</Typography>
    <Form />
  </RegisterContainer>
};

export default Register;
