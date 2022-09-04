import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import { APIContainer, FilmsContainer } from './style';

const ConsumindoAPI: React.FC = () => {
  interface FilmsType {
    title?: string;
  }

  const [films, setFilms] = useState<FilmsType[]>([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    const result = await fetch('https://swapi.dev/api/films');
    const response = await result.json();
    setFilms(response.results);
    console.log(response.results);
  };

  return (
    <APIContainer>
      <Typography variant='h4'>Consumindo API</Typography>
      <FilmsContainer>
        {films.map((film) => (
          <Typography variant='h5'>{film.title}</Typography>
        ))}
      </FilmsContainer>
    </APIContainer>
  );
};

export default ConsumindoAPI;
