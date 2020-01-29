const Bet365 = require('./routes/bet365');
const Smarkets = require('./routes/smarkets');
const Betfair = require('./routes/betfair');

getTotal = async () => {
  const one = await Betfair();
  const two = await Bet365();
  const three = await Smarkets();
  result = [one, two, three].reduce((a, b) => a + b, 0).toFixed(2);
  console.log(result);
};

getTotal();
