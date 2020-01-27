const puppeteer = require('puppeteer');
const URL = 'https://www.bet365.com/#/HO/';
const { betThreeSixFive } = require('../utils/creds');

module.exports = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'load', timeout: 0 });

    const email =
      'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_UserNameWrapper > input';
    const password =
      'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_PasswordWrapper > input:nth-child(1)';
    const loginButton =
      'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_PasswordWrapper > button';
    const balanceElement =
      'body > div > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-MembersInfoButton > div.hm-MembersInfoButton_AccountInfo > div.hm-MembersInfoButton_BankInfo > div.hm-Balance';

    await page.waitForSelector(email);
    await page.click(email);
    await page.keyboard.type(betThreeSixFive.username);
    await page.click(password);
    await page.keyboard.type(betThreeSixFive.password);
    await page.click(loginButton);
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    const balance = await page.$eval(balanceElement, e => e.innerText);
    console.log(balance.replace(/^\D+/g, ''));

    await page.screenshot({ path: 'screenshots/bet365.png' });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};
