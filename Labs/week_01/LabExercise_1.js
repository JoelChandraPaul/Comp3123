//Question 1
console.log("\nQUESTION 1")
let word = "the quick brown fox";
console.log(word);
let result =word
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(result);

//Question 2
console.log("\nQUESTION 2 ")
function max(a,b,c){
  if(a>=b&&a>=c){
    return a;
  }
  else if(b>=a&&b>=c){
    return b;
  }
  else{
    return c;
  }
}
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

//Question 3
console.log("\nQUESTION 3 ")
function right(str) {
  if (str.length < 3) {
    return str; 
  }
  let lastThree = str.slice(-3);    
  let rest = str.slice(0, -3); 
  return lastThree + rest;
}

console.log(right("Python"));   
console.log(right("JavaScript"));  
console.log(right("Hi"));         

//Question 4
console.log("\nQUESTION 4 ")
function angle_Type(angle) {
  if (angle < 90) {
    return "Acute angle";
  }
  else if (angle === 90) {
    return "Right angle";
  }
  else if (angle > 90 && angle <180) {
    return "Obtuse angle";
  }
  else if (angle === 180) {
    return "Straight angle";
  }
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

//Question 5
console.log("\nQUESTION 5 ")
function array_max_sum(arr, k) {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  let maxSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))



