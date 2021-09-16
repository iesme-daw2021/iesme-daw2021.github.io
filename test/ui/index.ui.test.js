require('expect-puppeteer');
const puppeteer = require('puppeteer');

const testUrl = 'https://iesme-daw2021.github.io/';

describe('Index page elements', () => {
  beforeAll(async () => {
    await page.goto(testUrl);
  });

  it('should display "2021 DWEC" text on page', async () => {
    await expect(page).toMatch('2021 DWEC');
  });

  it('should have a clickable button with Unit 04 text', async () => {
    await expect(page).toClick('a', { text: 'Unit 04' });
  });
});
/** 
describe('Navigation from Index Page', () => {
  let page;
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(testUrl);
  });

  it('should navigate to Unit 04 page after clicking the button', async () => {
    const [response] = await Promise.all([
      page.waitForNavigation(),
      page.click('a[href="tu04/index.html"]'),
    ]);

    const title = await page.title();
    expect(title).toBe('Guess the number');
  });


  afterAll(async () => {
    await browser.close();
  });
});
 */
