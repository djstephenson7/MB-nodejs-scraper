const { tenBetCreds } = require('../utils/creds');
const { tenBet } = require('../utils/pageElements');
const websiteScraper = require('../middleware/websiteScraper');

module.exports = async () => {
  const { username, password } = tenBetCreds;
  const {
    URL,
    emailField,
    passwordField,
    loginButton,
    balanceElement
  } = tenBet;

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
