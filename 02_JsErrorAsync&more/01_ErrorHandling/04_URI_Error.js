const decode_uri_error = (url)=>{
    const decode_uri = decodeURI(url);
    console.log(decode_uri);
}
// let url;
// const url = 'https://example.com/'
const url = 'https://example.com/%%invalidURI'
try{
    decode_uri_error(url)
}catch(err){
    if(err instanceof URIError){
        console.log("Recheck your url");
    }else{
        console.log(err);
    }
}

