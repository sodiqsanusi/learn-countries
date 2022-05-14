import styled from 'styled-components';

export const FilterArticle = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none;
  font-size: 1rem;
  color: var(--textColor);
  width: 70%;
  max-width: 250px;
  padding: 1em 1.5em;
  background-color: var(--overlayColor);
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2em;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  span{
    display: flex;
    transition: 0.3s;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterList = styled.ul`
  position: absolute;
  display: ${({isFilterListOpen}) => isFilterListOpen ? 'block' : 'none'};
  transition: 0.3s;
  background-color: var(--overlayColor);
  border-radius: 8px;
  width: 100%;
  padding: 1em 2em;
  z-index: 8;
  left: 0%;
  bottom: -200px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  li{
    list-style: none;
    line-height: 2;
  }a{
    text-decoration: none;
    color: var(--textColor);
    :hover,:focus{
      text-decoration: underline;
    }
  }
`;