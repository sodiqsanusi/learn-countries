import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 29px 0px;
  background-color: var(--overlayColor);
  border-radius: 8px;
`;

export const FormButton = styled.button`
  width: 15%;
  padding: 1em 2em;
  border: none;
  outline: none;
  background-color: var(--overlayColor);
  color: var(--textColor);
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s;
  :hover,:focus{
    transform: scale(0.9);
  }
  border-radius: 8px 0 0 8px;
`;

export const FormInput = styled.input`
   width: 85%;
   padding: 1em 0;
   padding-right: 1em;
   font-size: 1rem;
   border: none;
   outline: none;
   background-color: var(--overlayColor);
   color: var(--textColor);
   border-radius: 0 8px 8px 0;
   ::placeholder{
     color: var(--textColor);
     opacity: 80%;
   }
`;