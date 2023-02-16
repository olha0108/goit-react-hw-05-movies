import styled from '@emotion/styled';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const MovieDetailsbutton = styled.button`
  display: inline-block;
  width: 120px;
  height: 20px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const MovieDetailsLeft = styled.div`
  display: grid;
  margin: 30px;
`;

export const MovieDetailsRight = styled.div`
  margin: 30px;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
`;

export const MovieDetailsFooter = styled.div`
  margin: 30px;
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="12" />
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  gap: 4px;
  padding-bottom: 10px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    color: orangered;
    opacity: 1;
  }
`;
