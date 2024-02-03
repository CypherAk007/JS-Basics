let counter = 0 ;

const progress = document.getElementById('progress')
const clicked = ()=>{
    // console.log('clicked');
    counter = (counter+10)%110
    console.log(counter);
    progress.style.backgroundImage = `
    linear-gradient(to right,red 0%,red ${counter}%,black ${counter}%,black 100%)`

}
const button = document.querySelector('.btn')
button.addEventListener('click',clicked)


