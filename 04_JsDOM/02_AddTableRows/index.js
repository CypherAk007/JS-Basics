const form = document.getElementById('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const inputs = form.querySelectorAll('input')
    const table = document.getElementById('tab')
    const tr = document.createElement('tr')
    inputs.forEach((inp)=>{
        const td =document.createElement('td')
        td.textContent = inp.value
        tr.appendChild(td)
    })
    table.appendChild(tr)
    // Clearing the input 
    inputs.forEach((inp)=>{
        inp.value = ""
    })
    // console.log(inputs);
})