const accountId=12345
let accountEmail="abc@gmail.com";
var accountPassword="54321";
accountCity="Jaipur"
let accountState;


//accountId=2; //not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope

*/
accountEmail="abcs@gmail.com";
accountPassword="12345"; 
accountCity="hyd"
let ac=12;
console.log([accountId,accountEmail,accountPassword,accountCity,accountState,ac])