arr=[1,2,3];
for(i=0;i<arr.length;i++){
console.log(arr[i]);
}
//another way using callback function and forEach 
arr=[1,2,3,4];
function logThing(str){
    console.log(str);
}
arr.forEach(logThing);

//another way without function
logThing(1)
logThing(2)
logThing(3)