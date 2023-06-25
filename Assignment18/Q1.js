// given

/*

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


*/

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];

  for (const interval of intervals) {
    if (
      mergedIntervals.length === 0 ||
      interval[0] > mergedIntervals[mergedIntervals.length - 1][1]
    ) {
      mergedIntervals.push(interval);
    } else {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
        mergedIntervals[mergedIntervals.length - 1][1],
        interval[1]
      );
    }
  }

  return mergedIntervals;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]]
