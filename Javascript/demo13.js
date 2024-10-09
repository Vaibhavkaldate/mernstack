let obj={id:100,name:"abc",marks:90}
let x=obj.id
let y=obj.name
let z=obj.marks
console.log(x)
console.log(y)
console.log(z)
console.log("******** Destructing object ****")

let{marks,id,name,}=obj
console.log(id)
console.log(name)
console.log(marks)



console.log("******** Destructing object ****")

let{id:a,name:b,marks:c}=obj
console.log(a)
console.log(b)
console.log(c)