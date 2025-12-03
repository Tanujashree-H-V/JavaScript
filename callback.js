function cal(a,b,calans){
    ans=calans(a,b);
        return ans;  
}
function sum(a,b){
    return a+b;
}
ans=sum(2,3,cal);
console.log(ans);