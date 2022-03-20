import { renderPhoto } from './render-comments.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderPosts = (posts = {}, comments = []) => {
  const container = document.createElement('div');
  container.id = `posts-${posts.id}-${posts.title.spilt(' ').join('-')}`;

  const titleEl = document.createElement('h2');
  titleEl.innerHTML = post.title;
  container.appendChild(titleEl);

  const idEl = document.createElement('p');
  idEl.innerHTML = 'posts: ' + post.id;
  container.appendChild(idEl);

  const userEl = document.createElement('p');
  userEl.innerHTML = 'user: ' + post.id;
  container.appendChild(userEl);

  const renderedComments = comments.map(renderComments).reduce((all, next) => {
    all.appendChild(next);
    return all;
  }, document.createElement('div'));
  container.appendChild(renderedComments);

  return container;
};
