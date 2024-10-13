class A{
    show(){
        console.log("Hello World")
    }
}
class B extends A{
    disp(){
        console.log("Hi")
    }
}
let ob=new B()
ob.show()
ob.disp()

//In Javascript multiple inheritance is not possible
