import styled from 'styled-components';

const StyledSignin = styled.div`
  width: 100%;
  height: 90vh;
  background-color: var(--logo-bg);
  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    width: 600px;
    background-color: skyblue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    > div {
      display: grid;
      grid-template-columns: 25% 75%;
      align-items: center;
      margin-bottom: 1rem;
      margin-top: 1rem;
      > label {
        font-size: 1.5rem;
      }
      > input {
        width: 100%;
        font-size: 1.5rem;
        padding: 12px 24px;
      }
    }

    > button {
      margin-top: 1rem;
      background-color: var(--primary-main);
      color: var(--bg-main);
      padding: 12px 24px;
      font-size: 1.5rem;

      &:hover {
        cursor: pointer;
      }

      &:disabled,
      &:disabled > i {
        background-color: var(--logo-bg);
        color: var(--text-sub);
        cursor: not-allowed;
      }

      > i {
        margin-right: 1rem;
        color: var(--bg-main);
      }
    }
  }
`;

export default StyledSignin;
