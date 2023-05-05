import styled from 'styled-components';

const StyledProfile = styled.div`
  width: 100%;
  background-color: var(--logo-bg);

  > .banner-container {
    width: 100%;
    height: 60vh;
    position: relative;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover + button {
        background-color: rgba(24, 119, 242, 1);
        color: var(--bg-sub);
      }
    }
  }

  > .heading {
    position: relative;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    > .avatar-container {
      display: flex;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: var(--bg-sub);
      transform: translateY(-40%);
      z-index: 2;
      border: 8px solid var(--logo-bg);
      position: relative;
      overflow: hidden;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    .name-container {
      margin-left: 1rem;
      margin-top: 1rem;
      > h1 {
        font-size: 3rem;
        letter-spacing: 1px;
      }
      > p {
        font-size: 1.2rem;
        margin-top: 0.6rem;

        > span {
          margin-right: 1rem;
          > i {
            margin-right: 12px;
            color: var(--primary-main);
          }
        }
      }
    }

    .make-freinds {
      flex-grow: 1;
      text-align: end;
      margin: 1.5rem;
      transform: translateX(40%);
      > button {
        padding: 16px 60px;
        font-size: 1.5rem;
        background-color: var(--primary-main);
        color: var(--logo-bg);
        border-radius: 10px;

        &:hover {
          cursor: pointer;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;
        }
        > i {
          color: var(--logo-bg);
          margin-right: 1.5rem;
        }

        &:hover,
        &:hover > i {
          background-color: var(--logo-bg);
          color: var(--text-main);
        }

        &:active {
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        }
      }
    }
  }

  .main-container {
    width: 100%;
    padding: 100px;
    padding-top: 40px;
    display: grid;
    grid-template-columns: 25vw 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 2rem;
    grid-column-gap: 5vw;
    align-items: flex-start;

    > .sidebar {
      width: 100%;
      border-radius: 30px;
      background-color: var(--bg-main);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      padding-top: 30px;
      padding-bottom: 30px;

      > ul {
        display: flex;
        flex-direction: column;

        > li {
          border-bottom: 1px solid var(--logo-bg);

          > button {
            width: 100%;
            color: var(--text-main);
            background-color: transparent;
            padding-top: 20px;
            padding-bottom: 20px;
            font-weight: 500;
            display: grid;
            grid-template-columns: 20% 80%;
            font-size: 1.5rem;

            &:hover {
              background-color: var(--logo-bg);
              cursor: pointer;
            }
            > i {
              color: var(--icon);
              justify-self: flex-end;
            }

            > span {
              margin-left: 2rem;
              justify-self: flex-start;
            }
          }

          .highlighted {
            border-left: 5px solid var(--primary-main);
            background-color: var(--logo-bg);
            color: var(--primary-main);
          }

          .highlighted > i {
            color: var(--primary-main);
          }
        }
      }
    }

    .main-view {
      grid-row: span 2;

      > .locked-profile {
        width: 100%;
        height: 40vh;
        background-color: var(--bg-main);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 30px;
        padding: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > i {
          font-size: 5rem;
          margin-bottom: 2rem;
        }
        > h1 {
          color: var(--icon);
          font-size: 3rem;
        }
      }
    }
  }

  .editable {
    /* height: auto !important; */
  }
`;

export default StyledProfile;
