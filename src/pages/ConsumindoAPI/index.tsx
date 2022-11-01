import { useEffect, useState } from 'react';

import { CircularProgress, Typography } from '@mui/material';
import { APIContainer, FilmsContainer } from './style';

const ConsumindoAPI: React.FC = () => {
  interface FilmsType {
    title?: string;
    director?: string;
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
      return console.log('Deu merda meu parceiro!');
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
          <>
            <Typography variant='h5'>{`Films: ${film.title}`}</Typography>
            <Typography variant='h5'>{`Director: ${film.director}`}</Typography>
          </>
        ))}
      </FilmsContainer>
    </APIContainer>
  );
};

export default ConsumindoAPI;
