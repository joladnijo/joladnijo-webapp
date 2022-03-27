import { test, expect } from '@playwright/test'

//példa request innen: https://playwright.dev/docs/test-api-testing
const config: PlaywrightTestConfig = {
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://www.metaweather.com/',
    //extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      //'Accept': 'application/json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      //'Authorization': `token ${process.env.API_TOKEN}`,
    //},
  }
};
export default config;

//innetnől indul a teszt - tudom nem célszerű egy fájlban tárolni, akinek van kedve lehetne szétszedni
//const REPO = 'test-repo-1';
//const USER = 'github-username';

test('nézzük meg milyen az idő budapesten', async ({ request }) => {
  const budIdo = await request.post(`/api/location/search/?query=Budapest`);
  expect(budIdo.ok()).toBeTruthy();
});
