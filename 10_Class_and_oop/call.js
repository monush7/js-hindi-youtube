function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createuser(username,email,passoword){
    SetUsername.call(this,username)
    this.email=email
    this.passoword=passoword
}

const chai=new createuser('chai','chai@gmail.com','123');
console.log(chai);
