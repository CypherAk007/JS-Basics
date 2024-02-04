const time = ()=>{
    setTimeout(()=>{
        const para = document.createElement('p')
        para.textContent = "Inserted after 2 sec"
        document.body.appendChild(para)
    },2000)
}

time()