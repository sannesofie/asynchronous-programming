/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderComments = (comments = {}) => {
  const container = document.createElement('div');
  container.id = 'comments-' + comments.id;
  container.className = 'photo';

  const titleEl = document.createElement('h2');
  titleEl.innerHTML = comments.title;
  container.appendChild(titleEl);

  const imgEl = document.createElement('img');
  imgEl.alt = comments.title;
  imgEl.src = comments.thumbnailUrl;
  container.appendChild(imgEl);

  return container;
};
