const tog = document.getElementsByClassName('toggle');
let flag = true;
const toggleEvent = ()=>{
    flag = !flag
    if (flag){
        tog[0].classList.add('on')

    }else{

        tog[0].classList.remove('on')
    }
    
    console.log('clicked');
}
console.log(tog);
tog[0].addEventListener('click',toggleEvent)