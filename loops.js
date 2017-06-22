function forLoop(arr) {
  for(var i = 0; i < 25; i++) {
    if(i == 1) {
      arr.push("I am 1 strange loop.");
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(num) {
  var counter = num;
  while(counter > 0) {
    console.log(counter)
    counter --;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  if (arr.length > 0 && maybeTrue() ) {
    arr.shift();
  }
  return arr;
}
