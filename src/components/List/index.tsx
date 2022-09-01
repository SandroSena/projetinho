import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { peoplesList } from '../../pages/Peoples';
import { Link } from 'react-router-dom';

const SelectedListItem: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <List component='nav' aria-label='secondary mailbox folder'>
        {peoplesList.map((people) => (
          <Link to={`${people.id}`} style={{textDecoration: 'none', color: '#fff'}}>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText>{people.name}</ListItemText>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default SelectedListItem;
