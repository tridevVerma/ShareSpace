import styled from 'styled-components';

const StyledPost = styled.div`
  background-color: var(--bg-main);
  border-radius: 20px;
  padding: 2rem;
  padding-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  > .heading {
    display: flex;
    align-items: center;

    > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    > .user-info {
      flex-grow: 1;
      > h4 {
        font-size: 1.5rem;
        color: var(--text-main);
      }
      > p {
        font-size: 1.2rem;
        color: var(--time);
        margin-top: 6px;

        > span {
          margin-left: 6px;
        }
      }
    }

    a i {
      font-size: 2rem;
    }

    #expand-post-header {
      margin-left: 2rem;
      margin-right: 1rem;
    }
  }

  .title {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-sub);
    > p {
      font-size: 1.3rem;
    }
  }

  .desc {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-main);
    > p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  .footer {
    > .display-count {
      display: flex;
      align-items: center;

      .like-count {
        flex-grow: 1;
      }

      .like-count > i {
        font-size: 1.3rem;
        color: var(--primary-main);
        margin-right: 8px;
      }

      .like-count > span {
        font-size: 1.3rem;
        color: var(--sub-heading);
      }

      .comment-count,
      .share-count {
        > p {
          font-size: 1.3rem;
          color: var(--sub-heading);
        }
        > p span {
          margin-right: 6px;
        }
      }

      .share-count {
        margin-left: 1rem;
      }
    }

    .action-btns {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--time);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;

      a {
        color: var(--text-sub);
        font-weight: 500;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        > i {
          font-size: 1.5rem;
          margin-right: 10px;
        }

        span {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default StyledPost;
