import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

/**
 * Fetches users by their ids and returns the user's intro
 *
 * @async
 * @param {array} [ids = []] - The array of user ids to fetch
 * @return {promise<array>} - An array of the user's intro
 */

const getIntros = async (ids = []) => {
  const responsePromises = ids.map((nextId) => fetchUserById(nextId));
  const responses = await Promise.all(responsePromises);
  for (const res of responses) {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusTesxt}`);
    }
  }
  const userPromises = responses.map((response) => {
    return response.json();
  });
  const users = await Promise.all(userPromises);
  console.log(users);
  const intros = users.map((user) => {
    return `${user.id}: Hello, my name is ${user.name}`;
  });
  return intros;
}; 


// --- --- tests --- ---

describe('getIntros: returns an array of user introductions', () => {
  it('gets intros for 6', async () => {
    const actual = await getIntros([6]);
    expect(actual).toEqual(['6: Hello, my name is Mrs. Dennis Schulist']);
  });
  it('gets intros for 8, 6, 4', async () => {
    const actual = await getIntros([8, 6, 4]);
    expect(actual).toEqual([
      '8: Hello, my name is Nicholas Runolfsdottir V',
      '6: Hello, my name is Mrs. Dennis Schulist',
      '4: Hello, my name is Patricia Lebsack',
    ]);
  });
  it('gets intros for 4, 7, 5, 6', async () => {
    const actual = await getIntros([4, 7, 5, 6]);
    expect(actual).toEqual([
      '4: Hello, my name is Patricia Lebsack',
      '7: Hello, my name is Kurtis Weissnat',
      '5: Hello, my name is Chelsey Dietrich',
      '6: Hello, my name is Mrs. Dennis Schulist',
    ]);
  });
  it('gets intros for no one', async () => {
    const actual = await getIntros([]);
    expect(actual).toEqual([]);
  });
});

console.log('= = = =  the call stack is empty  = = = =');
