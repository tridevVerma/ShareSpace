const API_ROOT = 'http://localhost:8000/api/v1';

export const API_URLS = {
  signIn: () => `${API_ROOT}/users/signin`,
  signUp: () => `${API_ROOT}/users/signup`,
  posts: (page, limit) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,
  createPost: (content) => `${API_ROOT}/posts/create`,
  deletePost: (postId) => `${API_ROOT}/posts/delete-post?postId=${postId}`,
  createFreindship: (userId) =>
    `${API_ROOT}/freindship/create-freindship?userId=${userId}`,
  freinds: () => `${API_ROOT}/freindship/fetch-user-freinds`,
  removeFreind: (userId) =>
    `${API_ROOT}/freindship/remove-freindship?userId:${userId}`,
  toggleLike: (parentId, parentType) =>
    `${API_ROOT}/likes/toggle?parentId=${parentId}&parentType=${parentType}`,
  getLikes: (parentId, parentType) =>
    `${API_ROOT}/likes?parentId=${parentId}&parentType=${parentType}`,
  deleteComment: (commentId) => `${API_ROOT}/comments?commentId=${commentId}`,
  editUser: () => `${API_ROOT}/users/edit`,
  userInfo: (userId) => `${API_ROOT}/users/info?userId=${userId}`,
  searchUsers: (searchText) => `${API_ROOT}/users/search?text=${searchText}`,
};

export const LOCALSTORAGE_TOKEN_KEY = '__sharespace_token__';
