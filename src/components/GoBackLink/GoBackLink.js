import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './GoBackLink.styled';
export const GoBackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
