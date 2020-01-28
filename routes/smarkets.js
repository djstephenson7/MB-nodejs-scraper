const puppeteer = require('puppeteer');
const { smarketsCreds } = require('../utils/creds');
const { smarkets } = require('../utils/pageElements');
const {
  visitPage,
  inputInfo,
  clickElement,
  scrapeBalance
} = require('../middleware/helpers');

module.exports = async () => {
  const { username, password } = smarketsCreds;
  const {
    URL,
    emailField,
    passwordField,
    loginButton,
    balanceElement
  } = smarkets;

  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await visitPage(browser, URL);

    await inputInfo(page, emailField, username);
    await inputInfo(page, passwordField, password);
    await clickElement(page, loginButton);
    await scrapeBalance(page, balanceElement);

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};
