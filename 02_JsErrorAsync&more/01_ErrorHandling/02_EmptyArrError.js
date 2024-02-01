const arrCheck = (arr)=>{
    if (arr.length==0){
        throw new Error("Empty Array")
    }else{
        console.log(arr);
    }
}

const arr = []
try{
    arrCheck(arr)
}catch(err){
    console.log(err.message);
}