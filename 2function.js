function repeat(operation, num) {
  
 var i;
  for (i = 0; i < num; i++) {
   operation();
 }
  if (num <= 0) {
    return;
  }
  operation();
  repeat(operation, --num);
}

module.exports = repeat;