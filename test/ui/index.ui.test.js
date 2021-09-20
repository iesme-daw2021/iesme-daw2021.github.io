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
    await expect(page).toClick('a', { text: 'Unit 0X' });
  });
});

describe('Navigation from Index Page', () => {
  let page;
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(testUrl);
  });

  it('should navigate to Unit 0X page after clicking the button', async () => {
    const [response] = await Promise.all([
      page.waitForNavigation(),
      page.click('a[href="tu0X/index.html"]'),
    ]);

    const title = await page.title();
    expect(title).toBe('Unit 0X');
  });

  afterAll(async () => {
    await browser.close();
  });
});
