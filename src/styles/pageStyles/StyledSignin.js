import styled from 'styled-components';

const StyledSignin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--logo-bg);
  display: flex;
  justify-content: center;
  align-items: center;

  .signin-container {
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-columns: 50% 50%;
    place-items: center;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: 30px;
    overflow: hidden;
    margin-top: 10vh;
    .signin-form-container {
      justify-self: flex-end;
      width: 100%;
      height: 100%;
      background-color: var(--bg-main);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2vw;

      > .brand-logo img {
        width: 150px;
        margin-bottom: 1.5rem;
      }
      > h1 {
        color: var(--text-main);
        margin-bottom: 2.5rem;
        font-size: 2.5vw;
      }

      .google-login-btn {
        width: 25vw;
        padding: 12px;
        font-size: 1.5rem;
        font-weight: 500;
        display: grid;
        grid-template-columns: 15% 85%;
        place-items: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color: var(--bg-main);
        > img {
          width: 30px;
        }
      }

      .login-divider {
        width: 25vw;
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--time);
      }

      .login-divider::before,
      .login-divider::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid var(--time);
      }

      .login-divider:not(:empty)::before {
        margin-right: 10px;
      }

      .login-divider:not(:empty)::after {
        margin-left: 10px;
      }

      > form {
        width: 25vw;
        display: flex;
        flex-direction: column;

        > div {
          > input {
            width: 100%;
            font-size: 1.3rem;
            padding: 12px 24px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            margin-bottom: 1rem;
          }
        }

        .forget-password-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1rem auto;
          color: var(--icon);

          > div {
            > input {
              &:hover {
                cursor: pointer;
                color: var(--text-sub);
              }

              &:checked + label {
                color: var(--text-sub);
              }
            }

            > label {
              margin-left: 12px;
              &:hover {
                cursor: pointer;
                color: var(--text-sub);
              }
            }
          }

          > a {
            color: var(--primary-main);
            font-weight: 700;
            &:hover {
              cursor: pointer;
            }
          }
        }

        > button {
          margin-top: 0.5rem;
          background-color: var(--primary-main);
          color: var(--bg-main);
          padding: 12px 24px;
          font-size: 1.5rem;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

      .signup-link {
        width: 25vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 1rem;
        font-weight: 700;
        color: var(--time);

        > p > a {
          text-decoration: underline;
        }
      }
    }

    > .img-container {
      justify-self: flex-start;
      width: 100%;
      height: 100%;
      background-color: var(--primary-main);
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        width: 90%;
      }
    }
  }
`;

export default StyledSignin;
