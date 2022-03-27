import { test, expect } from '@playwright/test'

//példa request innen: https://playwright.dev/docs/test-api-testing
const config: PlaywrightTestConfig = {
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://www.metaweather.com',
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

test('budapest_idojaras', async ({ request }) => {
  const budIdo = await request.get(`/api/location/search/?query=budapest`);
  expect(budIdo.ok()).toBeTruthy();
  //expect(await budIdo.json()).toContainEqual(expect.objectContaining({
  //  title: 'Budapest',
  //  woeid: '804365',});
