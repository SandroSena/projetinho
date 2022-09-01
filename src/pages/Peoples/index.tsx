import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type PeopleType = {
  name: String;
  age: Number;
  id?: Number;
};

export const peoplesList: PeopleType[] = [
  {
    name: 'Sandro',
    age: 30,
    id: 1,
  },
  {
    name: 'Laura',
    age: 24,
    id: 2,
  },
];

const Peoples = () => {
  return (
    <>
      <Typography align='center' variant='h3'>
        Peoples Page
      </Typography>
      {peoplesList.map((people) => (
        <Link to={`${people.id}`}>
          <p>{people.name}</p>
        </Link>
      ))}
    </>
  );
};

export default Peoples;
