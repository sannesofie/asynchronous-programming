import { typicodeResource } from '../api-calls/typicode-resource.js';

import { renderAlbum } from '../components/render-album.js';
import { fourOhFour } from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';

export const choosePost = async (event) => {
  const postId = event.target.form.postId.value;

  const root = document.getElementById('root');
  root.innerHTML = '';

  try {
    const postPromise = typicodeResource('posts', postId);
    const commentsPromise = typicodeResource('posts', postId, 'comments');

    const [posts, comments] = await Promise.all([postPromise, commentsPromise]);

    const postElement = renderAlbum(posts, comments);

    root.appendChild(postElement);
  } catch (err) {
    console.error(err);

    const errorElement = err.message.includes('HTTP error! status: 404')
      ? fourOhFour(postId)
      : otherError(postId);

    root.appendChild(errorElement);
  }
};
