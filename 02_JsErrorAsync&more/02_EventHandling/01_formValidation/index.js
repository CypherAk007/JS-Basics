const getInputValue =()=>{
    // console.log(element.id);
    const form = document.getElementById('myForm')
    const errMsgDiv = document.getElementById('errorMsg')
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        errMsgDiv.innerHTML=''
        const requiredFields = form.querySelectorAll('[required]')
        console.log(requiredFields,typeof(requiredFields));
        requiredFields.forEach((field) =>{
            console.log(field.value,field.getAttribute('name'))
            if (field.value.trim()===''){
                const msg = document.createElement('p')
                msg.textContent = `${field.getAttribute('name')} is Required!!`
                errMsgDiv.appendChild(msg)
            }
        })
    })
}

getInputValue()