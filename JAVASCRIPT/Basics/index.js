/*  console.log("One")
for( i=0;i<100;i++){
    console.log("Two");
}
console.log("Three");
*/


/* console.log("One")
setTimeout(()=>{
console.log("Two")
},10 )
console.log("Three")
*/ 

/*
setTimeout(()=>{
console.log("One")
setTimeout(()=>{
    console.log("Two")
    setTimeout(()=>{
        console.log("Three")
        setTimeout(()=>{
            console.log("Four")
            setTimeout(()=>{
                console.log("Five")
                setTimeout(()=>{
                    console.log("Six")
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
},1000) 
*/


const mypromise=new Promise((resolve,reject)=>{
    const username="aditisingh11";
    const password="123456";
    if(username=="aditisingh11" && password=="123456"){
        resolve(" login success");

    } else {
        reject("username or password incorrect")
    }
})

 /* mypromise.then((msg)=>{
    console.log(msg)
  }).catch((msg)=>{
    console.log(msg)
  }).finally(()=>{
    console.log("All done")
  })
 */

  /*
  const mypromise1= new Promise((resolve,reject)=>{
    const num=123;
    if(num%2==0)
        resolve("Even no ")
    else
        reject("odd no ")
  })
  mypromise1.then((msg)=>{
    console.log(msg)
  }).catch((msg)=>{
    console.log(msg)
  }).finally(()=>{
    console.log("All done")
  }) 
    */
// aync() and await() are always used in pairs

  async function handleData(){
    try{
        // console.log("Heyy")
       const result =await mypromise;
       const mypromise3=new Promise((resolve,reject)=>{
         if(result=="login success"){
            resolve("Order received")
         }
         else {
            reject("order denied")
         }
       })
        const result2=await mypromise3;
        console.log(result2)
       
        // console.log("Hello")
    }catch(err){    
        console.log(err)
    }finally{
        console.log("All done")
    }
  }
  handleData();

  