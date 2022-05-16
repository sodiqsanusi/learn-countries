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
  @media (min-width: 900px){margin-top: 0}
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterList = styled.ul`
  position: absolute;
  display: ${({isFilterListOpen}) => isFilterListOpen ? 'block' : 'none'};
  transition: display 0.3s;
  background-color: var(--overlayColor);
  border-radius: 8px;
  width: 100%;
  padding: 1em 2em;
  z-index: 8;
  left: 0%;
  bottom: -230px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  text-align: left;
  li{
    list-style: none;
    line-height: 2;
  }a{
    text-decoration: none;
    color: var(--textColor);
    transition: text-decoration .3s;
    :hover,:focus{
      text-decoration: underline;
    }
  }
`;