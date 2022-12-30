import { Wrapper, Input, Icon, Button } from './SearchBox.styled';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export const SearchBox = ({ name, onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmit(searchName);
    setSearchName('');
  };
  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <Input type="text" name={name} onChange={handleChange} />
      <Button type="submit">
        <Icon />
      </Button>
      <Toaster position="top-right" />
    </Wrapper>
  );
};
