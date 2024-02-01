const checkJson = (jsonString) =>{
    try{
        const data = JSON.parse(jsonString)
        console.log(data,typeof(data));
    }catch(err){
        if (err instanceof SyntaxError){
            console.log("Recheck your json string");
        }else{
            console.log(err);
        }
    }
}

// s = '{"name":"abhishek","age":22}'
s = '{"name":"abhishek","age":22,}'
checkJson(s)