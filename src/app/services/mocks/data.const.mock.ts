export const TEST_NAME = 'test';
export const TEST_SEARCH_TERM = 'frog';
export const TEST_URL = 'http://test.com';

export const mocksData = {
  repositories: [
    {
      id: 1,
      name: TEST_NAME,
      fullName: TEST_NAME,
      ownerAvatar: TEST_NAME,
      branchesUrl: TEST_NAME,
      branches: [],
      description: TEST_NAME
    }
  ],
  repositoriesFromServer: {
    items: [{
      id: 1,
      name: TEST_NAME,
      full_name: TEST_NAME,
      owner: {avatar_url: TEST_URL},
      branches_url: TEST_NAME,
      description: TEST_NAME
    }]
  },
  branches: [
    { name: TEST_NAME }
  ]
};
