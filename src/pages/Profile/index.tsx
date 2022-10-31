import { Typography } from '@mui/material';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Profile = () => {
  const authCtx = useContext(AuthContext);

  const yourToken = authCtx.token;

  console.log(yourToken + '');

  return (
    <>
      <Typography
        variant='h2'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Welcome To Profile Page
      </Typography>
    </>
  );
};

export default Profile;
