import { Typography } from '@mui/material';
import List from '../../components/List';
import { ListContainer } from './styles';

export type PeopleType = {
  name: string;
  age: number;
  id?: string;
};

export const peoplesList: PeopleType[] = [
  {
    name: 'Sandro',
    age: 30,
    id: '1',
  },
  {
    name: 'Laura',
    age: 24,
    id: '2',
  },
  {
    name: 'Celso',
    age: 24,
    id: '3',
  },
];

const Peoples = () => {
  return (
    <ListContainer>
      <Typography variant='h3'>Peoples Page</Typography>
      <List />
    </ListContainer>
  );
};

export default Peoples;
