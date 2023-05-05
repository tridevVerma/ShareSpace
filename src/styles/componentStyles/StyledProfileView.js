import styled from 'styled-components';

const StyledProfileView = styled.div`
  width: 100%;
  background-color: var(--bg-main);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 30px;
  padding: 80px;

  > ul {
    display: flex;
    flex-direction: column;
    > li {
      display: grid;
      grid-template-columns: 25% 60% 15%;
      grid-row-gap: 2rem;
      margin-bottom: 4rem;
      padding-bottom: 1rem;
      box-shadow: 0px 11px 11px -11px rgba(0, 0, 0, 0.1);
      height: 60px;
      overflow: hidden;
      > h1 {
        grid-row: 1 / 3;
        font-size: 1.8rem;
        color: var(--sub-heading);
      }

      > h2 {
        color: var(--text-sub);
      }

      > button {
        width: fit-content;
        font-size: 1.5rem;
        background-color: transparent;
        color: var(--primary-main);
        text-decoration: underline;
        justify-self: flex-end;
        &:hover {
          cursor: pointer;
        }

        > i {
          color: var(--primary-main);
          font-size: 1.2rem;
          margin-right: 1rem;
          visibility: hidden;
        }

        &:hover i {
          visibility: visible;
        }
      }

      > .edit-form {
        grid-column: 2 / 4;
        justify-content: space-between;
        > input {
          background-color: var(--logo-bg);
          display: block;
          width: 100%;
          grid-template-columns: 1fr auto;
          padding: 10px 24px;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        > button {
          width: 100%;
          padding: 10px 24px;
          background-color: var(--primary-main);
          color: var(--logo-bg);
          font-size: 1.5rem;
          text-decoration: none;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
            background-color: var(--logo-bg);
            color: var(--primary-main);
            cursor: pointer;
          }

          &:active {
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
          }
        }

        > select {
          width: 100%;
          font-size: 1.5rem;
          border-radius: 0px;
          border: none;
          outline: none;
          background-color: var(--logo-bg);
          padding: 10px 24px;
          margin-bottom: 1.5rem;
          > option {
            text-transform: capitalize;
          }
        }
      }
    }

    > li:last-child {
      margin-bottom: 0rem;
    }
  }
`;

export default StyledProfileView;
