const result = [];
const iterative = (size) => {
  if (size <= 0) return result;
  if (size === 1) {
    result.push(0);
    return result;
  }
  if (size === 2) {
    result.push(0);
    result.push(1);
    return result;
  }
  result.push(0);
  result.push(1);
  let i = 2;
  for (i; i < size; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
};

const recursive = (size) => {
  if (size <= 0) return result;
  if (size === 1) {
    result.push(0);
  }
  if (size === 2) {
    result.push(0);
    result.push(1);
  } else {
    recursive(size - 1);
    result.push(result[result.length - 2] + result[result.length - 1]);
  }
};

recursive(8);
console.log(result);
