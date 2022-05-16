import styled from 'styled-components';

export const Content = styled.main`
  display: grid;
  padding: 1em 2em;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 50%), 1fr));
  grid-gap: 5em 1em;

  a{
    color: var(--textColor);
    text-decoration: none;
    border-radius: 8px;
    width: 260px;
    justify-self: center;
    animation: animateThumb 1.5s;
    transition: opacity .3s, transform .3s;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 29px 0px;
    :hover,
    :focus{
      opacity: .8;
      transform: scale(.97);
    }
    @keyframes animateThumb{
      from{
        transform: scale(.5);
      }
    }
    section{
      border-radius: 8px 8px 0 0;
      height: 170px;
      background-color: var(--overlayColor);
      img{
        border-radius: 8px 8px 0 0;
        height: 100%;
        object-fit: cover;
      }
    }
    article{
      background-color: var(--overlayColor);
      padding: 2em 1em;
      border-radius: 0 0 8px 8px;
    }
    h2{margin-bottom: .5em;}
    li{
      list-style: none;
      font-weight: 800;
    }
    span{
      font-weight: 300;
    }
  }
`