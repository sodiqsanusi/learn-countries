import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--overlayColor);
  padding: 3em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 900px){
    padding: 3em 3.5em;
  }
  a{
    width: 60%;
    font-size: min(6vw, 1.1rem);
    color: var(--textColor);
    text-decoration: none;
    font-weight: 800;
  }
  box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 20px -20px;
`;

export const ToggleButton = styled.button`
  width: 35%;
  color: var(--textColor);
  max-width: 105px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: min(5vw, 1rem);
  transition: 0.3s;
  :hover,:focus{
    transform: scale(0.95);
    opacity: 0.8;
  }
  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;