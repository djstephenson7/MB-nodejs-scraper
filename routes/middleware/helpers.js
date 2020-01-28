visitPage = async (browser, URL) => {
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'load', timeout: 0 });

  return page;
};

inputInfo = async (page, element, input) => {
  await page.waitForSelector(element);
  await page.click(element);
  await page.keyboard.type(input);
};

clickElement = async (page, element) => {
  await page.click(element);
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
};

scrapeBalance = async (page, balanceElement) => {
  const balance = await page.$eval(balanceElement, e => e.innerText);
  return balance.replace(/^\D+/g, '');
};

module.exports = {
  visitPage,
  inputInfo,
  clickElement,
  scrapeBalance
};
