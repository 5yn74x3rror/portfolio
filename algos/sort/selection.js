const selectionSort = arr => {
  let currentFirstIdx = 0;
  let smallestIdx;
  while (currentFirstIdx !== arr.length - 1) {
    smallestIdx = currentFirstIdx;
    
    for (let i = currentFirstIdx + 1; i < arr.length; i++) {
      if (arr[i] <= arr[smallestIdx]) smallestIdx = i;
    }
    
    if (smallestIdx !== currentFirstIdx) {
      [arr[currentFirstIdx], arr[smallestIdx]] = [arr[smallestIdx], arr[currentFirstIdx]];
    }

    currentFirstIdx++;
  }
  return arr;
};

// console.log(selectionSort([1, 6, 2, 5, 4, 8, 2, 5, 4]));
// console.log(selectionSort([1, 4, 3, 2, 6, 7, 3, 5]));
// console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(selectionSort([8, 7, 6, 5, 4, -1, -12, 0, 2]));