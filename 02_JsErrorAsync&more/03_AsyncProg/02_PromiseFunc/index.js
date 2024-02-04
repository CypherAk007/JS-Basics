// const axios  = require("axios")
// const data = axios.get("url")
const data = fetch('https://example.com/data')
data.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.message);
})
.finally(()=>{
    console.log("promise Ended!!!");
})
// const event = new Promise((resolve,reject) =>{
//     var name = "k"
//     if (name==="Abhishek"){
//         resolve(name)
//     }else{
//         reject("Error name not matched")
//     }
// })

// event.then((name) =>{
//     console.log(name);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log('promise Finished');
// })