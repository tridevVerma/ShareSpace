import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  > .spinner {
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid var(--icon);
    border-right: 2px solid var(--icon);
    border-bottom: 2px solid var(--icon);
    border-left: 4px solid ${(props) => props.color};
    background: transparent;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

export default StyledLoader;
