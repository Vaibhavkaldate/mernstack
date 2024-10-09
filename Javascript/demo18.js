class Test{
    #firstname;
    #lastname
    constructor(fname,lname){
        this.#firstname=fname
        this.#lastname=lname
    }
    show(){
        console.log(`First Name :${ this.#firstname}`)
        console.log(`Last Name :${ this.#lastname}`)
        
    }

}

let ob1=new Test("abc","xyz")
let ob2=new Test("pqr","rst")

    ob1.show()
    ob2.show()


    