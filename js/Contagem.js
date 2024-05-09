function countValuesInRange(array, start, end) {
    let count = 0;
    for (const num of array) {
      if (num >= start && num <= end) count++;
    }
    return count;
  }
  
  module.exports = { countValuesInRange };
  