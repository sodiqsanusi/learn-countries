import styled from 'styled-components';

export const Container = styled.main`
  padding: 2em 1.5em;
  @media (min-width: 900px) {
    padding: 2em 3.5em;
  }
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
  border: 1px solid var(--textColor);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 29px 0px;
  transition: transform .3s, opacity .3s;
  cursor: pointer;
  :hover,:focus{
    transform: scale(0.95);
    opacity: 80%;
  }
`;

export const ContainsAll = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-top: 3em;
  @media (min-width: 900px) {
    flex-direction: row;
  }
  section{
    max-width: 500px;
    margin-bottom: 2em;
    @media (min-width: 900px) {
    width: 40%;
    }
    img{
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
      border: 5px solid var(--textColor);
    }
  }
`;

export const MainArticle = styled.article`
  @media (min-width: 900px) {
    width: 50%;
    main{
      max-width: 600px;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
  }
  h2{
    margin-bottom: 1em;
  }
  ul{
    margin-bottom: 2em;
  }
  li{
    line-height: 1.8;
    font-weight: 600;
  }
  span{
    font-weight: 300;
    font-size: .95rem;
  }
`;

export const BorderSideNote = styled.aside`
  h3{
    margin-bottom: .5em;
  }
  ul{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(150px, 20%), 1fr));
    gap: .5em;
    max-width: 500px;
  }
  button{
    border: none;
    border-radius: 5px;
    width: 70%;
    font-weight: 800;
    background-color: var(--overlayColor);
    color: var(--textColor);
    max-width: 100px;
    outline: none;
    padding: .3em;
    border: 1px solid var(--textColor);
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform .3s, opacity .3s;
    :hover,:focus{
      transform: scale(0.95);
      opacity: 80%;
    }
  }
`;