import { Box, Button, Stack, TextField } from "@mui/material";
import { FormContainer } from "./styles";

const Form: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.2, width: '30ch' },
      }}
      autoComplete="off"
    >
      <FormContainer>
        <TextField
          required
          id="outlined-required"
          label="Login"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <Stack direction="row" spacing={6}>
          <Button variant="contained" size='large'>Login</Button>
          <Button variant="contained" size='large'>Register</Button>
        </Stack>
      </FormContainer>
    </Box>
  )
}

export default Form;