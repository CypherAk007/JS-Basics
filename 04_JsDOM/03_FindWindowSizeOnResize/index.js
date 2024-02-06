const getSize = ()=>{
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    document.getElementById('wh').innerHTML =  "<h1>Width: " + w + " â€¢ Height: " + h + "</h1>";

}