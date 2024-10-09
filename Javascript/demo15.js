// function show(...arr){
//     console.log(arr)
// }
// show(100)
// show(100,300)
// show(10,20,30,40,50,60,10,20)

console.log("**************************")

function show(x,y,...arr){
    console.log(arr)
    console.log(x,y)
}
show(100)
show(100,300)
show(10,20,30,40,50,60,10,20)


