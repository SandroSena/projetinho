import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { peoplesList, PeopleType } from '../Peoples';
import { PeopleContainer } from './styles';

const PeoplesDetail = () => {
  const { id } = useParams();

  // const people: PeopleType | undefined = peoplesList.find((p) => p.id === id);
  const people: PeopleType | undefined = peoplesList.find((p) => p.id === id);

  console.log(id);

  return (
    <>
      <Typography variant='h3' align='center'>People Details</Typography>
      <PeopleContainer>
        <Typography variant='h4'>{`Name: ${people?.name}`}</Typography>
        <Typography variant='h4'>{`Age: ${people?.age}`}</Typography>
      </PeopleContainer>
    </>
  );
};

export default PeoplesDetail;
