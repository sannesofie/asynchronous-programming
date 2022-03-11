import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 *
 * @async
 */

/**
 * Fetches a user by id and checks a company name against the data object.
 *
 * @async
 * @param {number} [id=1] - The user id to fetch.
 * @param {string} [companyName=''] - The place of work we want to check.
 * returns {Promise<boolean>} A promise that resolves to a boolean, true if the user works at companyName, false if they don't.
 *
 * @throws {Error} {status number}: {status text}
 */

const userWorksAt = async (id = 1, companyName = '') => {
/**
 * Fetches user by id and returns promise of username and email.
 *
 * @async
 * @param {number} [id=1] - The user ID to fetch.
 * @returns {Promise<string>} A promise that resolves to the user's
 * id, username and email on a string.
 *
 * @throws {Error} {status number}: {status text}
 */

const usernameAndEmail = async (id = 1) => {



const userWorksAt = async () => {};

describe('userWorksAt checks if a user works at a specific company', () => {
  it('user 4 does work at Robel-Corkery', async () => {
    const actual = await userWorksAt(4, 'Robel-Corkery');
    expect(actual).toEqual(true);
  });
  it('user 4 does not work at Romaguera-Jacobson', async () => {
    const actual = await userWorksAt(4, 'Romaguera-Jacobson');
    expect(actual).toEqual(false);
  });
  it('user 6 does work at Considine-Lockman', async () => {
    const actual = await userWorksAt(6, 'Considine-Lockman');
    expect(actual).toEqual(false);
  });
  it('user 7 does not work at John Groups', async () => {
    const actual = await userWorksAt(7, 'John Groups');
    expect(actual).toEqual(false);
  });
});

log('= = = =  the call stack is empty  = = = =');
