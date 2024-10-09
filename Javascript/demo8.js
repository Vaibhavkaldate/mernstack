//create map object 
let ob=new Map()
console.log(ob)

// set objects in map object 
ob.set("id",100)
ob.set("name","xyz")
ob.set("address","abc")
ob.set("id",100)
console.log(ob)
// get value from map object
console.log(ob.get("name"))
let x=ob.get("address")
console.log(ob)

// chack that item is present or not 
console.log(ob.has("id"))
console.log(ob.has("name"))
console.log(ob.has("marks"))

//check size of map object 
let y = ob.size
console.log(y)

//delete item
console.log(ob)
ob.delete("name")
console.log(ob)

//clear item
ob.clear()
console.log(ob)


// get all keys
let mkeys=ob.keys()
console.log(mkeys)
for (let k of mkeys) {
    console.log(k)
    
}

// get all values 
let mvalues=ob.values()
console.log(mvalues)
for (let v of mvalues){
    console.log(v)
}

// get all items
let items =ob.entries()
console.log(items)
for(let item of items){
    console.log(item)
    console.log(`${item[0]}=${item[1]}`)
}


