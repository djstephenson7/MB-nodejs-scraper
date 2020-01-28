module.exports = {
  betThreeSixFive: {
    URL: 'https://www.bet365.com/#/HO/',
    emailField:
      'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_UserNameWrapper > input',
    passwordField:
      'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_PasswordWrapper > input:nth-child(1)',
    loginButton:
      'body > div:nth-child(1) > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-Login_PasswordWrapper > button',
    balanceElement:
      'body > div > div > div:nth-child(1) > div > div.hm-HeaderModule_Primary > div.hm-HeaderModule_UserAdmin > div > div.hm-MembersInfoButton > div.hm-MembersInfoButton_AccountInfo > div.hm-MembersInfoButton_BankInfo > div.hm-Balance'
  },
  smarkets: {
    URL: 'https://smarkets.com/members/login',
    emailField: '#login-form-email',
    passwordField: '#login-form-password',
    loginButton:
      '#smarkets > div:nth-child(5) > div > div > div.form-page-main > form > button',
    balanceElement:
      '#finance-dropdown-anchor > div > span.value.formatted-currency.numeric-value'
  },
  tenBet: {
    URL: 'https://www.10bet.co.uk',
    login: '#hr-mid-Top_ResponsiveHeader_41363-page-header-right8 > a',
    emailField:
      '#Center_LoginResponsiveBlock_43771-responsive-login-name-input',
    passwordField:
      '#html-container-Center_LoginResponsiveBlock_43771 > div > div > div:nth-child(4) > div',
    loginButton:
      '#html-container-Center_LoginResponsiveBlock_43771 > div > div > div:nth-child(9)'
  }
};
