const puppeteer = require('puppeteer');
const { betfairCreds } = require('../utils/creds');
const { betfair } = require('../utils/pageElements');
const {
  visitPage,
  inputInfo,
  clickElement,
  scrapeBalance
} = require('../middleware/helpers');

module.exports = async () => {
  const { username, password } = betfairCreds;

  const {
    URL,
    emailField,
    passwordField,
    loginButton,
    balanceElement
  } = betfair;

  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await visitPage(browser, URL);

    await inputInfo(page, emailField, username);
    await inputInfo(page, passwordField, password);
    await clickElement(page, loginButton);

    const balance = await scrapeBalance(page, balanceElement);

    await browser.close();
    return balance;
  } catch (error) {
    console.error(error);
  }
};
