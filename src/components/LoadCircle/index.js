import styled from "styled-components";

const MainLoad = styled.main`
  width: 20vw;
  height: 20vw;
  max-width: 150px;
  max-height: 150px;
  border: 10px dotted var(--textColor);
  border-radius: 50%;
  margin: 10% auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 29px 0px;
  animation: spinner 2s linear infinite;

  @keyframes spinner{
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
`;

const LoadCircle = () => {
  return ( 
    <MainLoad>
    </MainLoad>  
  );
}
 
export default LoadCircle;