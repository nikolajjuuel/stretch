const flatten = (arr) => {
  const flat = [];

  const helper = (arr) => {
    for (const num in arr) {
      if (Array.isArray(arr[num])) {
        helper(arr[num]);
      } else {
        flat.push(arr[num]);
      }
    }
  }
  
  helper(arr);
  return flat;
}

console.log(flatten([1, 2, [3, 4, [5, 6, 7]], 8, [9]]))