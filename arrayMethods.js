function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
     cb(array[i], i, array);
  }
}

function map(array, cb) {
  const newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(cb(array[i], i, array));
    }
  return newArr;
}

function filter(array, cb) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) newArr.push(array[i]);
  }
  return newArr;
}

function reduce(array, cb, initialValue) {
    let currentValue = initialValue;
    for (let i = 0; i < array.length; i++) {
      if (currentValue === undefined && i === 0) {
        currentValue = array[i];
      } else {
        currentValue = cb(currentValue, array[i], i, array);
      }
    }

    return currentValue;
}

function some(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (cb(array[i], i, array)) {
        return true;
      }
    }
    return false;
}

function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

function flat(array, depth = 1) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth > 0) {
          newArr.push(...flat(array[i], depth - 1));
      } else {
        newArr.push(array[i]);
      }
  }
  return newArr;
}

function find(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      return array[i];
    }
  }
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find,
}
