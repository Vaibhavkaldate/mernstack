//desrtructing using function 

function show([x,y,...arr2]){
    console.log(x)
    console.log(y)
    console.log(arr2)
}

function disp({fname,id}){
    console.log(id)
    console.log(fname)

}
let arr=[10,20,30,40,50,60]
show(arr)

let ob ={id:100,fname:"xyz",marks:90}
disp(ob)
