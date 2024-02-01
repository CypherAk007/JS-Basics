const typeError = (value)=>{
    return value.name;
}

let value;
try{
    typeError(value)

}catch(err){
    if (err instanceof TypeError){
        console.log("Cannot read properties of undefined");
    }else{
        // console.log(err.message);
        throw err;

    }
}
