function iterativeLog(array) {
  array.forEach(logger);
}

function logger(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterate(addOne) {
  var array = [1,2,3,4,5];
  array.forEach(addOne);
  return array;
}

function addOne (element, index, array) {
  array[index] += 1;
}

function doToArray(array, double) {
  array.forEach(double);
}

function double (element, index, array) {
  array[index] *= 2;
}
