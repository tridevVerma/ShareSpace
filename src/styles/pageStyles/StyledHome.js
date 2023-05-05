import styled from 'styled-components';

const StyledHome = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: var(--logo-bg);
  padding: 2.5rem;
  padding-top: 14vh;
  display: grid;
  grid-template-columns: 1fr 25vw;
  grid-gap: 2vw;
  align-items: start;

  > .posts-container {
    grid-row: span 2;
    width: 50vw;
    margin-left: auto;
  }
`;

export default StyledHome;
