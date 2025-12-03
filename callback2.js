function sub3(a,b,sub){
    ans=sub(a,b);
    return ans;
}
function sub(a,b){
    return a-b;
}
ans=sub(4,2,sub3);
console.log(ans);