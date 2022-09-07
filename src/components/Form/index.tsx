import { Box, Button, TextField } from '@mui/material';
import { FormContainer, ButtonContainer } from './styles';

const Form: React.FC = () => {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { margin: 1.2, width: '30ch' },
      }}
      autoComplete='off'
    >
      <FormContainer>
        <TextField required id='outlined-required' label='Login' />
        <TextField
          required
          id='outlined-password-input'
          label='Password'
          type='password'
        />
        <ButtonContainer>
          <Button variant='contained' size='large'>
            Login
          </Button>
          <Button variant='contained' size='large'>
            Register
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Box>
  );
};

export default Form;
