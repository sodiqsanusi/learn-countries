import styled from 'styled-components';

export const Container = styled.main`
  padding: 2em 1em;
  li{
    list-style: none;
  }
`;
export const MainBtn = styled.button`
  width: 50%;
  max-width: 120px;
  font-size: 1rem;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5em 1.9em;
  color: var(--textColor);
  background-color: var(--overlayColor);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 29px 0px;
  transition: transform .3s, opacity .3s;
  cursor: pointer;
  :hover,:focus{
    transform: scale(0.95);
    opacity: 80%;
  }
`;