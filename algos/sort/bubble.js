const bubbleSort = arr => {
  let endIdx = arr.length - 1;
  while (endIdx > 0) {
    for (let i = 0; i < endIdx; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      }
    }
    endIdx--;
  }
  return arr;
};

console.log(bubbleSort([1, 4, 3, 2, 6, 7, 3, 5]));