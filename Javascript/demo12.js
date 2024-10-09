//Rest operator 

let arr=[10,20,30,40,50,60,70.80]
let[x,y,...arr2]=arr
console.log(x)
console.log(y)
console.log(arr2)

// In above example arr contain 9 elements when we destruct the arr 10 value store in x variable
//  20 value store in y variable and rest of the values store in arr2 because of rest operator (...)
