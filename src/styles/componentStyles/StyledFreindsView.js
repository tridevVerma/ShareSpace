import styled from 'styled-components';

const StyledFreindsView = styled.div`
  width: 100%;
  background-color: var(--bg-main);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 30px;
  padding: 80px;

  > ul {
    > li {
      display: flex;
      align-items: center;
      margin-bottom: 3rem;
      > .avatar-container {
        width: 80px;
        border-radius: 20px;
        overflow: hidden;
        margin-right: 2rem;
        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      > .info {
        > h2 {
          color: var(--text-main);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        > p {
          font-size: 1.2rem;
          color: var(--text-sub);
        }
      }

      > .birthday {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        > i {
          font-size: 2rem;
          color: var(--primary-main);
        }
        > p {
          margin-left: 2rem;
          font-size: 1.5rem;
          color: var(--text-sub);
        }
      }

      > button {
        margin-left: 1rem;
        cursor: pointer;
        background-color: transparent;
        padding: 10px;
        > i {
          color: var(--primary-main);
          font-size: 2rem;
        }
      }
    }
  }
`;

export default StyledFreindsView;
