export const bubbleSort = (arr: Number[]) => {
  let endIdx = arr.length - 1;
  while (endIdx > 0) {
    let numOfSwaps = 0;

    for (let i = 0; i < endIdx; i++) {
      if (arr[i] > arr[i + 1]) {
        // console.log('swapping', arr[i], arr[i+1]);
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        numOfSwaps++;
      }
    }
    // console.log('loop end');
    if (numOfSwaps === 0) break; // prevent more sorting if already sorted
    endIdx--;
  }
  return arr;
};

// console.log(bubbleSort([1, 4, 3, 2, 6, 7, 3, 5]));
// console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(bubbleSort([8, 7, 6, 5, 4, -1, -12, 0, 2]));
