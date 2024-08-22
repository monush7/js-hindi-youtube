const user={
    username:"abc",
    password:"123",

    welcomemeaasge:function()
    {
        console.log(`${this.username} hi`);
        console.log(this)

    }
}
//user.welcomemeaasge()
//user.username="samm";
//user.welcomemeaasge();

//console.log(this)

function chai(){
    let userName="abc";
    console.log(userName);
}
//chai()

// const addtwo=(n1,n2)=>{
//     return n1+n2;
// }
//console.log(addtwo(5,6));


//const addTwo=(n1,n2)=> n1+n2;

//const addTwo=(n1,n2)=> (n1+n2);

const addTwo=(n1,n2)=>({userName:"abcd"})

console.log(addTwo(3,22));

























