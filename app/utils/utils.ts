const formatMoney = ({ number, noDecimal, decimals, uniformDecimal }: any) => {
  number = typeof number === "number" ? number : Number(number);
  number = new RegExp(/-?\d+\.{1}\d+/).test(number)
    ? number.toFixed(noDecimal ? 0 : decimals || 2)
    : number;
  if (uniformDecimal) {
    number = Number(number).toFixed(decimals);
  }
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export { formatMoney };
