const parserAmountToDecimal = (amount: string) => {
  const indexDecimal = amount.indexOf('.');
  const getInt = amount.slice(0, indexDecimal);
  const getDecimal = amount.slice(indexDecimal).padEnd(8, '0');
  return getInt.concat(getDecimal);
};
