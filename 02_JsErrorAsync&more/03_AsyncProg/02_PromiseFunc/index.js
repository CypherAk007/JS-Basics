const event = new Promise((resolve,reject) =>{
    var name = "k"
    if (name==="Abhishek"){
        resolve(name)
    }else{
        reject("Error name not matched")
    }
})

event.then((name) =>{
    console.log(name);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('promise Finished');
})