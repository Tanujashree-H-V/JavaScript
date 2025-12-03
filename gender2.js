users=[{name:"tara",gender:"female"},{name:"shiva",gender:"male",},
    {name:"john",gender:"male"}
]
for(let i=0;i<users.length;i++){
    if(users[i]["gender"]=="male"){
        console.log(users[i]["name"]);
    }
}