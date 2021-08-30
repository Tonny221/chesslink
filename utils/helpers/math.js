const isEven = (num) => {
  return num % 2 === 0;
};

const isOdd = (num) => {
  return !isEven(num);
};

export { isEven, isOdd };
