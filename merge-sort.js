//let unsorted = [3, 2, 1, 13, 8, 5, 0, 1];
let unsorted = [105, 79, 110, 105, 79, 110];
let sorted = [...unsorted];
console.log(sorted);

const merge = (start, mid, end) => {
  let i = 0;
  let length = end - start;
  let left = start;
  let right = mid + 1;
  console.log(`Start: ${start}, Mid: ${mid}, End: ${end}, Length: ${length}`);
  for (i; i < length; i++) {
    if (unsorted[left] <= unsorted[right]) {
      //console.log(i + start);
      sorted[i + start] = unsorted[left];
      if (left < mid) left += 1;
      //console.log(`Sorted length after left: ${sorted.length}`);
      //console.log(sorted);
    } else {
      //console.log(i + start);
      if (right < unsorted.length) sorted.splice(i + start, 0, unsorted[right]);
      if (right <= end) right += 1;
      sorted.splice(right, 1);
      //console.log(`Sorted length after right: ${sorted.length}`);
      //console.log(sorted);
    }
  }
  unsorted = [...sorted];
};
const mergeSort = (start, end) => {
  if (start < end) {
    let mid;
    mid = Math.floor((start + end) / 2);
    //console.log(`Mid: ${mid}`);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }
};

mergeSort(0, unsorted.length - 1);
console.log(unsorted);
