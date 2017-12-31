/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

var insert = function(intervals, newInterval) {
// new array to hold arr and arrNew
  let result = [];
  let len = intervals.length;
  let temp = new Interval();
  temp = newInterval;

  // divide into 3 sections
  //1. add smaller interval into result
  let counter = 0;

  // adding into result those interval with intervals.end < newInterval.start

  while(counter < len && (intervals[counter].end < newInterval.start)){
    result.push(intervals[counter]);
    counter++;
  }

  //2. is to merge those within newInterval
  // those whose start < newInterval.end
  while(counter < len && (intervals[counter].start <= newInterval.end)){
    temp = new Interval(Math.min(intervals[counter].start,newInterval.start,temp.start),
      Math.max(intervals[counter].end,newInterval.end,temp.end));
    counter++;
  }

  result.push(temp);


  // 3. those who start.end > newInterval.end, simply mean the left over if any
  while(counter < len && (intervals[counter].start > newInterval.end)){
    result.push(intervals[counter++]);
  }

  return result;
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

module.exports = {insert,Interval};
