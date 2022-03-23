import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

// --- declare function ---

/**
 * Fetches users by their ids and returns their name, city and company.
 *
 * @async
 * @param {array} [ids = []] - The array of user ids to fetch.
 * returns {Promise<array>} - An array of objects for the users' names, cities and companies.
 *
 * @throws {Error} {status}: {text}
 */

const createSummaries = async (ids = []) => {
  const responsePromises = ids.map((id) => {
    return fetchUserById(id);
  });
  try {
    const responses = await Promise.all(responsePromises);
    for (const res of responses) {
      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
    }
    const usersPromises = responses.map((res) => {
      return res.json();
    });
    const users = await Promise.all(usersPromises);
    const usersSummaries = users.map((user) => {
      return {
        name: user.name,
        city: user.address.city,
        companyName: user.company.name,
      };
    });
    return usersSummaries;
  } catch (error) {
    throw new Error(error);
  }
};

// --- --- tests --- ---

describe('createSummaries: returns an array of user summaries', () => {
  it('creates a summary for 6', async () => {
    const actual = await createSummaries([6]);
    expect(actual).toEqual([
      {
        name: 'Mrs. Dennis Schulist',
        city: 'South Christy',
        companyName: 'Considine-Lockman',
      },
    ]);
  });
  it('creates a summary for 5, 1, 10', async () => {
    const actual = await createSummaries([5, 1, 10]);
    expect(actual).toEqual([
      {
        name: 'Chelsey Dietrich',
        city: 'Roscoeview',
        companyName: 'Keebler LLC',
      },
      {
        name: 'Leanne Graham',
        city: 'Gwenborough',
        companyName: 'Romaguera-Crona',
      },
      {
        name: 'Clementina DuBuque',
        city: 'Lebsackbury',
        companyName: 'Hoeger LLC',
      },
    ]);
  });
  it('creates a summary for 7, 5', async () => {
    const actual = await createSummaries([7, 5]);
    expect(actual).toEqual([
      {
        name: 'Kurtis Weissnat',
        city: 'Howemouth',
        companyName: 'Johns Group',
      },
      {
        name: 'Chelsey Dietrich',
        city: 'Roscoeview',
        companyName: 'Keebler LLC',
      },
    ]);
  });
  it('creates a summary for no one', async () => {
    const actual = await createSummaries([]);
    expect(actual).toEqual([]);
  });
});

console.log('= = = =  the call stack is empty  = = = =');