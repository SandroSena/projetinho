import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const PeoplesDetail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <Typography variant='h3'>People Details</Typography>
      <h1>{id}</h1>
    </>
  );
};

export default PeoplesDetail;
