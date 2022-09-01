import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { peoplesList, PeopleType } from '../Peoples';

const PeoplesDetail = () => {
  const { id } = useParams();

  const people: PeopleType | undefined = peoplesList.find((p) => p.id === id);

  console.log(id);

  return (
    <>
      <Typography variant='h3'>People Details</Typography>
      <Typography variant='h4'>{`Name: ${people?.name}`}</Typography>
      <Typography variant='h4'>{`Age: ${people?.age}`}</Typography>
    </>
  );
};

export default PeoplesDetail;
