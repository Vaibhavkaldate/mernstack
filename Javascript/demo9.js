let arr=[10,20,30,10,20]
let s1=new Set(arr)
console.log(s1)

//add value into set object 
s1.add(80)
s1.add(90)
console.log(s1)

//check specific value present in set 
console.log(s1.has(20))
console.log(s1.has(120))
if(s1.has(20)){
    console.log("value is present" )
} else{
    console.log("value is not  present" )
}



//delete values from set 
s1.delete(20)
console.log(s1)


// check size of object
let n=s1.size
console.log(`Size is ${n}`)



//clear set 
s1.clear()
console.log(s1)

