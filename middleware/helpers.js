visitPage = async (browser, URL) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
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
  console.log(balance.replace(/^\D+/g, ''));

  return balance.replace(/^\D+/g, '');
};

module.exports = {
  visitPage,
  inputInfo,
  clickElement,
  scrapeBalance
};
