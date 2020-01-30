const { betfairCreds } = require('../utils/creds');
const { betfair } = require('../utils/pageElements');
const websiteScraper = require('../middleware/websiteScraper');

module.exports = async () => {
  const { username, password } = betfairCreds;

  const {
    URL,
    emailField,
    passwordField,
    loginButton,
    balanceElement
  } = betfair;

  return await websiteScraper(
    URL,
    emailField,
    username,
    passwordField,
    password,
    loginButton,
    balanceElement
  );
};
