const createButton = ()=>{

    const button = document.createElement('button');
    button.textContent = 'Clickme'
    
    button.addEventListener('click',()=>{
        console.log("Button Clicked!");
    });
    
    document.body.appendChild(button)
}

// createButton()

const createDropDown = ()=>{
    // 5-> onChange function 
    const onChange = ()=>{
        console.log("Selected");
        // Get access to dropdown list 
        const list = document.getElementById('drpdwn');
        // Get access to selected option in list 
        console.log(list.options[list.selectedIndex].text);
        // Set the selected value to input field 
        const output = document.getElementById('inputDisplay')
        output.value = list.options[list.selectedIndex].value
    }
    // 1-> Create element 
    const dropdown = document.createElement("select");
    // create id for dropdown
    dropdown.setAttribute('id','drpdwn');

    // 2->create init option for document also gen other options and append to dropdown
    const initOption = document.createElement("option");
    initOption.innerHTML = "---Choose option---"
    initOption.value = ""
    dropdown.appendChild(initOption)
    
    for (i=0;i<5;i++){
        const option = document.createElement("option");
        option.value = "option"+i;
        option.innerHTML = "option "+i;
        dropdown.appendChild(option)
    }
    // 4-> track the user option clicked
    dropdown.addEventListener('change',onChange);
    document.body.appendChild(dropdown);
    
    //3-> create input field to display selected text 
    const text = document.createElement('h2');
    text.innerHTML = "Your Selected Tutorial Site is:"
    const inputDisplaySelected = document.createElement('input');
    inputDisplaySelected.setAttribute('id','inputDisplay')

    document.body.appendChild(text)
    document.body.appendChild(inputDisplaySelected)

}

createDropDown()
