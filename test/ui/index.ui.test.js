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

  it('should have a clickable button with Unit 1 text', async () => {
    await expect(page).toClick('a', { text: 'Unit 1' });
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

  it('should navigate to ud1 page after clicking the button', async () => {
    const [response] = await Promise.all([
      page.waitForNavigation(),
      page.click('a[href="ud1.html"]'),
    ]);

    const title = await page.title();
    expect(title).toBe('Unit 1');
  });

  /**
  it('should navigate to ud2 page after clicking the button', async () => {
    const [response] = await Promise.all([
      page.waitForNavigation(),
      page.click('a[href="ud2.html"]'),
    ]);

    const title = await page.title();
    expect(title).toBe('Unit 2');
  });
 */

  afterAll(async () => {
    await browser.close();
  });
});