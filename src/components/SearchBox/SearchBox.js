import { Wrapper, Input, Icon, Button } from './SearchBox.styled';
import { useState } from 'react';
export const SearchBox = ({ name, onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(searchName);
  };
  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <Input type="text" name={name} onChange={handleChange} />
      <Button type="submit">
        <Icon />
      </Button>
    </Wrapper>
  );
};
// https://api.themoviedb.org/3/search/movie/?&api_key=67983da9f1b0244a3f38bd567d5477a8&language=en-US&query=superman&include_adult=false
// http://api.themoviedb.org/3/search/movie?api_key=67983da9f1b0244a3f38bd567d5477a8&include_adult=false&language=en-US&query=batman
