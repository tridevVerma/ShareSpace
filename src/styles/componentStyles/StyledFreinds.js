import styled from 'styled-components';

const StyledFreinds = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: var(--bg-main);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-right: 6vw;
  padding: 3rem;

  > .heading {
    margin-bottom: 2rem;
    color: var(--text-main);
  }
  > .freinds-container {
    > ul {
      > li {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        margin-bottom: 2rem;

        > a {
          display: flex;
          align-items: center;
          > .avatar-container {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 2rem;
            > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          > .info {
            flex-grow: 1;
            > h2 {
              color: var(--text-main);
              font-size: 1.4rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }
            > p {
              color: var(--text-sub);
            }
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

      > li:last-child {
        margin-bottom: 0rem;
      }
    }
  }
`;

export default StyledFreinds;
