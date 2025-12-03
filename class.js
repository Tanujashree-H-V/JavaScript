class Animal{
    constructor(name,gender){
        this.name=name;
        this.gender=gender;
    }
    hil(){
        console.log("hello " + this.gender);
    }
}

let cat=new Animal("cat","female");
let dog=new Animal("dog","male");
cat.hil();//call function