const arrIdxErrChecking= (arr)=>{
    return (arr[arr.length]);
}

const arr = [1,2,3,4]
try{
   let val =  arrIdxErrChecking(arr);
   if (val===undefined){
    throw new RangeError("invalid idx")
   }
}catch(err){
    if (err instanceof RangeError){
        console.log(err.message);
    }
    else{
        console.log(err);
    }
}