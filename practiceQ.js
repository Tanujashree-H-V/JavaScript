let readlineSync=require("readline-sync");
let number=readlineSync.questionInt("enter the number less than 50: ")
while(number>=50){
    number=readlineSync.questionInt("enter the number less than 50: ")
}
console.log("number accepted")