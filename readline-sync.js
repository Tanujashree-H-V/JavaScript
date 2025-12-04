const readline=require("readline-sync");
const age=readline.questionInt("enter your age:");
const res = age>18 ?"vote":"not vote";
console.log(res);