import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 9px;
  top: 10px;
`;
export const Button = styled.button`
  display: inline-block;
  width: 39px;
  height: 39px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
