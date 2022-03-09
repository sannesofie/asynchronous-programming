import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* User Summary */

// --- declare some callbacks ---

const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
  return res.json();
};

const createSummary = (user) => {
  return `${user.id}: ${user.name}, ${user.city}, ${user.companyName}`;
};


const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 5');
fetchUserById(5)
  .then(handleResponse)
  .then(createSummary)
  .then(log)
  .catch(handleError);

  log('fetching and processing user 5');
fetchUserById(5)
  .then(handleResponse)
  .then(createSummary)
  .then(log)
  .catch(handleError);


log('fetching and processing user 10');
fetchUserById(10)
  .then(handleResponse)
  .then(createSummary)
  .then(log)
  .catch(handleError);

log('fetching and processing user -1');
// 404
fetchUserById(-1)
.catch(handleError);

log('= = = =  the call stack is empty  = = = =');
