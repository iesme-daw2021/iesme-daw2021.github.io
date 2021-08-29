import 'expect-puppeteer';

describe('ud1 page', () => {
  beforeAll(async () => {
    await page.goto('https://iesme-daw2021.github.io/ud1.html');
  });

  it('should have a title Unit 1 on the header section of the page', async () => {
    await expect(page).toMatchElement('span', { text: 'Unit 1' });
  });
  it('should have a paragraph with the sum of 5 and 7', async () => {
    await expect(page).toMatchElement('p', { text: '12' });
  });
});
