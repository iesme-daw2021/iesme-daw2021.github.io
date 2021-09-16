import 'expect-puppeteer';

describe('tu04 page', () => {
  beforeAll(async () => {
    await page.goto('https://iesme-daw2021.github.io/tu04/index.html');
  });

  it('should have a title Guess the number on the header section of the page', async () => {
    await expect(page).toMatchElement('span', { text: 'Guess the number' });
  });
});
