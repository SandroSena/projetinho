import { useEffect, useState } from 'react';

import { CircularProgress, Typography } from '@mui/material';
import { APIContainer, FilmsContainer } from './style';

const ConsumindoAPI: React.FC = () => {
  interface FilmsType {
    title?: string;
  }

  const [films, setFilms] = useState<FilmsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    setLoading(true);

    const result = await fetch('https://swapi.dev/api/films');
    const response = await result.json();

    if (!response) {
      setLoading(false);
      return console.log('Deu Merda');
    } else {
      setLoading(false);
      setFilms(response.results);
      console.log(response.results);
    }
  };

  return loading ? (
    <APIContainer>
      <CircularProgress />
    </APIContainer>
  ) : (
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
