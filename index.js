const puppeteer = require('puppeteer');
const URL = 'https://www.10bet.co.uk/';
const CREDS = require('./utils/creds');

const init = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'load', timeout: 0 });

    const login = '#hr-mid-Top_ResponsiveHeader_41363-page-header-right8 > a';
    const email =
      '#html-container-Center_LoginResponsiveBlock_43771 > div > div > div:nth-child(3)';

    const password =
      '#html-container-Center_LoginResponsiveBlock_43771 > div > div > div:nth-child(4) > div';

    const loginButton =
      '#html-container-Center_LoginResponsiveBlock_43771 > div > div > div:nth-child(9)';

    await page.click(login);
    await page.waitForSelector(email);
    await page.click(email);
    await page.keyboard.type(CREDS.tenBet.username);
    await page.click(password);
    await page.keyboard.type(CREDS.tenBet.password);
    // await page.click(loginButton);

    await page.screenshot({ path: 'screenshots/10bet.png' });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};

init();
