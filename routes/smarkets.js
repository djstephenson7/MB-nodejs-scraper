const { smarketsCreds } = require('../utils/creds');
const { smarkets } = require('../utils/pageElements');
const websiteScraper = require('../middleware/websiteScraper');

module.exports = async () => {
  const { username, password } = smarketsCreds;
  const {
    URL,
    emailField,
    passwordField,
    loginButton,
    balanceElement
  } = smarkets;

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
