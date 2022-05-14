import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2em 1em;
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    padding: 2em 3.5em;
  }
`;