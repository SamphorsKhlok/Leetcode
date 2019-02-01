/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  //console.log(points);
  //console.log(K);
  //console.log(points.length);
  // console.log(points[0][0]);
  // console.log(points[0][1]);
  let result = [];
  if(points.length < 2){
    if(points.length == 1){
      result.push(points[0]);
    }
    return result;
  }
  //console.log(points[0]);
  points.sort(function(a,b){
    let dA = a[0]*a[0]+a[1]*a[1];
    let dB = b[0]*b[0]+b[1]*b[1];

    return dA==dB ? 0 : (dA > dB? 1:-1);
  });

  //console.log(points);

  for(let i = 0; i < K;i++){
    //console.log(points[i]);
    result.push(points[i]);
  }

  return result;
};

module.exports = {kClosest}
