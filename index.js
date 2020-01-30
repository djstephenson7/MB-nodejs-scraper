const Bet365 = require('./routes/bet365');
const Smarkets = require('./routes/smarkets');
const Betfair = require('./routes/betfair');

getTotal = async () => {
  let results = await Promise.all([Bet365(), Betfair(), Smarkets()]);
  results = results.reduce((a, b) => a + b, 0).toFixed(2);
  console.log(results);

  return results;
};

getTotal();
