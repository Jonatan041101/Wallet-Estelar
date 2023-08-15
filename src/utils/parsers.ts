export const parseAmountToDecimal = (amount: string) => {
  const indexDecimal = amount.indexOf('.');
  const getInt = amount.slice(0, indexDecimal);
  const getDecimal = amount.slice(indexDecimal).padEnd(8, '0');
  return indexDecimal === -1 ? `${amount}.0000000` : getInt.concat(getDecimal);
};
export const parseAssetTypeNativeToXML = (asset: string) =>
  asset === 'native' ? 'Lumens (XLM)' : asset;
export const parseAssetType = (asset: string) =>
  asset === 'native' ? 'XLM' : asset;
