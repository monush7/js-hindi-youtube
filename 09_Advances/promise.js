const promisesOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async taski is completed');
        resolve();
        
    },6000)
})

promisesOne.then(function(){
    console.log('then block is executed');
});


new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log('task is async 2 is complted')
    },1000)
}).then(function(){
    console.log('then block is executed 2');
});

const promisesFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "Chai", email: "chai@example.com"})
              
        }else{
            reject('ERROR:Something went wrong');
        }
    },2000)
})


promisesFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promises is either or erjected")
)

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function() {
        let error=true;
        if(!error)
        {
            resolve({username: "Chai", email: "chai@example.com",password:123});
        }
        else{
            reject('ERROR:Something went wrong');
        }
    }, 1000);
})

async function consumeFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumeFive();



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error)
)