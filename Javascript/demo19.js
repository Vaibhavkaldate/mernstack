class Student{
    #id
    static i=0
    constructor(sid){
        this.#id=sid
        Student.i++
    }
    show(){
        console.log(`ID: ${this.#id}`)
        console.log(`Count is : ${Student.i}`)
    }

}
let s1= new Student(10)
let s2= new Student(20)
let s3= new Student(30)

s1.show()
s2.show()
s3.show()


