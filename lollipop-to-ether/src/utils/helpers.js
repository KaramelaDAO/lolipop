export const convertToDecimal = (val, decimalPlaces) =>
  Math.trunc(parseFloat(val) * Math.pow(10,decimalPlaces)) / Math.pow(10,decimalPlaces);
