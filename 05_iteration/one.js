for(let i=0;i<=10;i++)
{
    const ele=i;
    if(ele==5)
    {
        //console.log("5 is the middle number");
    }
    //console.log(ele);
}


// console.log
for(let i=1;i<=10;i++)
{
    //console.log(i);
    for(let j=1;j<=10;j++){
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
    }
}
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}