let arr = [10,20,30,40,50]

let arr2 = new Array(10,20,30,40)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr.at(0))


console.log("********")
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("********")

//by using forEach method 
function show(x){
    console.log(x)
}
arr.forEach(show)
console.log("********")

// arr.forEach(show)
arr.forEach((x)=>console.log(x))


