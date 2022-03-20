import { choosePost } from '../handlers/choosePost.js';

export const fetchAndRenderPost= (id = '') => {
  document.getElementById(id).addEventListener('click', choosePost);
};
