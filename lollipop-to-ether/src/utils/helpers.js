export const convertToDecimal = (val, decimalPlaces) =>
  Math.trunc(parseFloat(val) * Math.pow(10,decimalPlaces)) / Math.pow(10,decimalPlaces);

export const isMobileAgent  = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);