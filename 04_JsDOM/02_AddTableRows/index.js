const form = document.getElementById('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()

    // ********FOR ADDING ROWS******
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

const onClickHandler = (event)=>{
    //*********** / NOT WORKING *********
    // **********FOR EDITING THE EXISTING ROWS***********
    const rn = window.prompt("Input the Row number(0,1)", "0");
    const cn = window.prompt("Input the Column number(0,1)","0");
    const content = window.prompt("Input the Cell content");
    console.log(rn,cn,content);
    const table = document.getElementById('tab')
    const row = table.rows[parseInt(rn)]
    console.log(row[parseInt(cn)].value,row[parseInt(cn)].textContent,row[parseInt(cn)].innerHTML);
    // row[parseInt(cn)].textContent = content
}
