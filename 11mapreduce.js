module.exports = function (arr, fn) {
  return arr.reduce(function (prev, curr, idx, a) {
   
    prev.push(fn(curr, idx, a)); return prev;
    return prev.concat(fn(curr, idx, a));

  }, []);

};
