function sum(a,b,fnToCall){
    result=a+b;
    fnToCall(result);
}
function sumresult(data){
    console.log("the sum is "+data);
}
result=sum(1,2,sumresult);