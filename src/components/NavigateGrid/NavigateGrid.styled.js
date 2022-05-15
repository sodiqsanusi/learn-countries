import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px){
    flex-direction: row;
    padding: 2em 3.5em;
  }
  justify-content: space-between;
  align-items: center;
  padding: 2em 1em;

  button{
    width: 80%;
    max-width: 200px;
    margin: 1em 0;
    border: none;
    padding: 1em;
    border-radius: 8px;
    color: var(--textColor);
    background-color: var(--overlayColor);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 29px 0px;
    font-size: 1rem;
    cursor: pointer;
    transition: .3s;
    :hover,:focus{
      opacity: 80%;
      transform: scale(0.95);
    }
    :disabled,&[disabled] {
      background-color: darkgrey;
      color: #fff;
      cursor: not-allowed;
      :hover,:focus{
        opacity: 100%;
        transform: scale(1);
      }
    }
}
`;