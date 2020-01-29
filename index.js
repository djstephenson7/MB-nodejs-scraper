const Bet365 = require('./routes/bet365');
const Smarkets = require('./routes/smarkets');

getTotal = async () => {
  let one = await Bet365();
  let two = await Smarkets();

  console.log((one += two));
};

getTotal();
