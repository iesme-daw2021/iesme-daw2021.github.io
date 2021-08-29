import 'expect-puppeteer';

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://iesme-daw2021.github.io/');
  });

  it('should display "2021 DWEC" text on page', async () => {
    await expect(page).toMatch('2021 DWEC');
  });
});
