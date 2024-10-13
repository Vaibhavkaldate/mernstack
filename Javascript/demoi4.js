class A{
    constructor(x){
        this.i=x
        console.log("In A")
    }
}
class B extends A{
    constructor(a,b){
        super(a)
        this.j=b
        console.log("In B")
        
    }
    add(){
        console.log(this.i+this.j)
    }
}
let ob=new B(101,201)
ob.add()


