const tog = document.querySelector('.toggle');
let flag = true;
const toggleEvent = ()=>{
    flag = !flag
    if (flag){
        tog.classList.add('on')

    }else{

        tog.classList.remove('on')
    }
    
    console.log('clicked');
}
console.log(tog);
tog.addEventListener('click',toggleEvent)