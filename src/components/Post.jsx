import React from 'react';
import StyledPost from '../styles/componentStyles/StyledPost';
import { Image } from './';

const Post = () => {
  const post = {
    user: {
      firstname: 'Sudhanshu',
      lastname: 'Verma',
      avatar: require('../assets/images/avatar.png'),
      lock: false,
    },
    title: 'This is the title of the post',
    content: {
      type: 'image',
      url: require('../assets/images/image-1234.jpg'),
    },
    desc: "This was one of the most epic journeys, that i've got myself involved in. May be one of the most memorizable in my entire life !!",
    postedAt: '32m',
    likeCount: '1k',
    commentCount: '123',
    shareCount: '24',
  };

  const fullname = () => `${post.user.firstname} ${post.user.lastname}`;

  return (
    <StyledPost>
      <div className="heading">
        <img src={post.user.avatar} alt="user-avatar" />
        <div className="user-info">
          <h4>{fullname()}</h4>
          <p>
            {post.postedAt}{' '}
            <span>
              {post.user.lock ? (
                <i class="fa-solid fa-lock"></i>
              ) : (
                <i class="fa-solid fa-earth-americas"></i>
              )}
            </span>{' '}
          </p>
        </div>
        <a href="/" id="bookmark">
          <i class="fa-regular fa-bookmark"></i>
        </a>
        <a href="/" id="expand-post-header">
          <i class="fa-solid fa-ellipsis"></i>
        </a>
      </div>

      <div className="title">
        <p>{post.title}</p>
      </div>

      <div className="content">
        {post.content.type === 'image' && (
          <Image url={post.content.url}></Image>
        )}
      </div>

      <div className="desc">
        <p>{post.desc}</p>
      </div>

      <div className="footer">
        <div className="display-count">
          <div className="like-count">
            <i class="fa-solid fa-thumbs-up"></i>
            <span>{post.likeCount}</span>
          </div>
          <div className="comment-count">
            <p>
              <span>{post.commentCount}</span> comments
            </p>
          </div>
          <div className="share-count">
            <p>
              <span>{post.shareCount}</span> shares
            </p>
          </div>
        </div>

        <div className="action-btns">
          <a href="/" className="like">
            <i class="fa-regular fa-thumbs-up"></i>
            <span>Like</span>
          </a>
          <a href="/" className="comment">
            <i class="fa-regular fa-comment"></i>
            <span>Comment</span>
          </a>
          <a href="/" className="share">
            <i class="fa-light fa-share"></i>
            <span>Share</span>
          </a>
        </div>
      </div>
    </StyledPost>
  );
};

export default Post;
