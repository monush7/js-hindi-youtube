function mylplay(num){
    return num*5;
}

mylplay.power=2;
// console.log(mylplay(5));
// console.log(mylplay.power);
// console.log(mylplay.prototype)

function createuser(usename,score){
    this.usename=usename;
    this.score=score;
}


createuser.prototype.increment=function(){
    
    this.score+=1;
}

createuser.prototype.printMe=function(){
    console.log(`price is  ${this.score}`);
    
}

const chai =new createuser('chai',23);
const tea=createuser('coffee')
chai.printMe();
//tea.printMe();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   










