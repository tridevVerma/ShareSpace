import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: var(--bg-main);
  width: 100%;
  position: sticky;
  top: 0%;
  left: 0%;
  padding: 1rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  > ul {
    display: flex;
    align-items: center;

    > li.brand {
      flex-grow: 1;

      > a {
        display: flex;
        align-items: center;

        > .logo-container {
          background-color: var(--logo-bg);
          padding: 10px 16px;
          border-radius: 15px;
          margin-right: 1.5rem;
          > img {
            width: 50px;
          }
        }

        > span {
          font-size: 2rem;
          letter-spacing: 1px;
          font-weight: 700;
          color: var(--text-main);
        }
      }
    }

    li {
      > i {
        font-size: 1.2rem;
        margin-right: -40px;
        position: relative;
        z-index: 2;
      }
      > input {
        width: 600px;
        font-size: 1.2rem;
        padding: 15px 20px;
        padding-left: 50px;
        border-radius: 20px;
        background-color: var(--search-box);
        color: var(--text-sub);
        margin-right: 1.8rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

        &:focus {
          box-shadow: var(--clicked-effect);
        }
      }

      .signin,
      .signup,
      .logout {
        padding: 15px 40px;
        font-size: 1.5rem;
        color: var(--bg-sub);
        border-radius: 16px;
        background-color: var(--primary-main);
        transition: 0.2s all ease-out;
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        }

        &:hover,
        &:hover > i {
          background-color: var(--logo-bg);
          color: var(--text-main);
        }

        &:active {
          box-shadow: var(--clicked-effect);
        }
      }

      .signup {
        margin-left: 1.8rem;
        margin-right: 1.8rem;

        i {
          color: var(--bg-sub);
          margin-right: 1rem;
        }
      }

      .username {
        font-size: 1.5rem;
        color: var(--text-main);
        margin-left: 1.8rem;
        margin-right: 1.8rem;
      }
    }
  }
`;

export default StyledNavbar;
