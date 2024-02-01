const button = document.createElement('button');
button.textContent = 'Clickme'

button.addEventListener('click',()=>{
    console.log("Button Clicked!");
});

document.body.appendChild(button)
