const puppeteer = require('puppeteer');
const {
  visitPage,
  inputInfo,
  clickElement,
  scrapeBalance
} = require('./helpers');

module.exports = async (
  URL,
  emailField,
  username,
  passwordField,
  password,
  loginButton,
  balanceElement,
  dropDown
) => {
  const browser = await puppeteer.launch({ headless: false });
  let count = 0;

  while (count < 3) {
    try {
      const page = await visitPage(browser, URL);

      await inputInfo(page, emailField, username);
      await inputInfo(page, passwordField, password);
      await clickElement(page, loginButton);

      const balance = await scrapeBalance(page, balanceElement);

      await browser.close();
      return balance;
    } catch (error) {
      count++;
      console.error(error);
      await browser.close();
    }
  }
};
