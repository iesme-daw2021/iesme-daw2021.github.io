import 'expect-puppeteer';

describe('ud1 page', () => {
  beforeAll(async () => {
    await page.goto('https://iesme-daw2021.github.io/tu04/index.html');
  });

  it('should have a title Unit 04 on the header section of the page', async () => {
    await expect(page).toMatchElement('span', { text: 'Unit 04' });
  });
  it('should have a paragraph with the sum of 5 and 7', async () => {
    await expect(page).toMatchElement('p', { text: '12' });
  });
});
