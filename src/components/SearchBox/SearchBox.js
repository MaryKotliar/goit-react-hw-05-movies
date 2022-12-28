import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ name, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Icon />
      <Input type="text" name={name} />
    </Wrapper>
  );
};
