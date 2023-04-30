import styled from 'styled-components';

const StyledProfile = styled.div`
  width: 100%;
  background-color: var(--logo-bg);

  > .banner-container {
    width: 100%;
    height: 60vh;
    position: relative;

    > button {
      position: absolute;
      top: 150px;
      right: 40px;
      background-color: rgba(24, 119, 242, 0.8);
      color: var(--logo-bg);
      padding: 12px 30px;
      font-size: 1.5rem;
      border-radius: 10px;
      transition: 0.2s all;
      &:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: var(--logo-bg);
        color: var(--text-sub);
      }

      &:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      }
    }

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
      &:after {
        content: 'Update';
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
        color: var(--logo-bg);
        font-size: 1.5rem;
        font-weight: 600;
        transform: translateY(100%);
        transition: 0.5s all;
      }

      &:hover:after {
        cursor: pointer;
        transform: translateY(0%);
      }
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    .name-container {
      margin: 0.8rem;
      > h1 {
        font-size: 3rem;
        letter-spacing: 1px;
      }
      > p {
        font-size: 1.2rem;
        margin-top: 0.6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        > span {
          > i {
            margin-right: 12px;
            color: var(--primary-main);
          }
        }
      }
    }

    .info-lock {
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
    display: flex;
    align-items: flex-start;
    > .sidebar {
      width: 20vw;
      border-radius: 30px;
      background-color: var(--bg-main);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      padding-top: 30px;
      padding-bottom: 30px;
      margin-right: 6vw;
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
      flex-grow: 1;
      > .profile-view {
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
              }
            }
          }

          > li:last-child {
            margin-bottom: 0rem;
          }
        }
      }
    }
  }

  .editable {
    height: auto !important;
  }
`;

export default StyledProfile;
