const puppeteer = require('puppeteer');
const { betThreeSixFive } = require('../utils/creds');
const {
  visitPage,
  inputInfo,
  clickElement,
  scrapeBalance
} = require('./middleware/helpers');

module.exports = async () => {
  const URL = 'https://www.bet365.com/#/HO/';
  const email =
    'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_UserNameWrapper > input';
  const password =
    'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_PasswordWrapper > input:nth-child(1)';
  const loginButton =
    'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_PasswordWrapper > button';
  const balanceElement =
    'body > div > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-MembersInfoButton > div.hm-MembersInfoButton_AccountInfo > div.hm-MembersInfoButton_BankInfo > div.hm-Balance';

  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await visitPage(browser, URL);

    await inputInfo(page, email, betThreeSixFive.username);
    await inputInfo(page, password, betThreeSixFive.password);
    await clickElement(page, loginButton);
    await scrapeBalance(page, balanceElement);
    await page.screenshot({ path: 'screenshots/bet365.png' });

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};
