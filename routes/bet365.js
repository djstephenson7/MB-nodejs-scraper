const { betThreeSixFiveCreds } = require('../utils/creds');
const { betThreeSixFive } = require('../utils/pageElements');
const websiteScraper = require('../middleware/websiteScraper');

module.exports = async () => {
  const { username, password } = betThreeSixFiveCreds;
  const {
    URL,
    emailField,
    passwordField,
    loginButton,
    balanceElement
  } = betThreeSixFive;

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
