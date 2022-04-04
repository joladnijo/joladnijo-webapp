import { test, expect } from '@playwright/test'
//példa request innen: https://playwright.dev/docs/test-api-testing
const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://www.metaweather.com',
  }
};
export default config;

//innetnől indul a teszt - tudom nem célszerű egy fájlban tárolni, akinek van kedve lehetne szétszedni

  test('budapest_idojaras', async ({ request }) => {
      const response = await request.get('/api/location/search/?location=budapest')
      await apiActions.verifyStatusCode(response)
    })
