const form = document.getElementById('myform')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const para = document.createElement('p')
    // para.innerText = `$`
    const inputs = document.querySelectorAll('input')
    inputs.forEach((inp)=>{
        para.innerText+=`${inp.value} `
    })
    console.log(inputs);
    document.body.appendChild(para)

    const anchor = document.getElementById('w3r')
    const para2 = document.createElement('p')
    para2.textContent+=`${anchor.href} ${anchor.hreflang} ${anchor.rel} ${anchor.target} ${anchor.type} `
    document.body.appendChild(para2)
})