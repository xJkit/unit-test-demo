const isNumber = num => typeof(num) === 'number' && !isNaN(num);

const sum = (...nums) => {
  const total = nums.reduce((pre, num) => pre + num);
  if (!isNumber(total)) throw new Error('not a number');
  return total;
}

const factoral = (...n) => {
  if (n.length !== 1) throw new Error('not 1-arity');

  const num = n[0];
  if (!isNumber(num)) throw new Error('not a number');
  if (num < 1) throw new Error('only positive numbers are accepted');
  if (!Number.isInteger(num)) throw new Error('only positive integer are accepted');

  const nums = [...Array(num).keys()].map(k => k + 1);
  return nums.reduce((pre, num) => pre * num);
}


module.exports = { sum, factoral, isNumber };