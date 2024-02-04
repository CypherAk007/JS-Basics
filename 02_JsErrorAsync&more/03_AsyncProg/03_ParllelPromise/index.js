const arr = ['https://example.com/data','https://example.com/data','https://example.com/data','https://example.com/data']

// for(i=0;i<arr.length;i++){
    
// }
const fetcher = async()=>{
    try{
        await out(arr)
    }catch(err){
        console.log(err);
    }
}

const out =async(arr)=>{
    arr.forEach((url,idx)=>{
    setTimeout(()=>{
        const data = fetch(url)
        data.then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(idx+err.message);
        })
        .finally(()=>{
            console.log(`${idx} has Ended!!`);
        })
    },idx*1000)
})}

// fetcher()