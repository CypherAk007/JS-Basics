
const imgSlider = ()=>{
    const arr = ['forms','dropdown','google']
    let counter = 0
    const slideLeft =()=>{
        counter = (counter+arr.length-1)%arr.length
        img.src = `img/${arr[counter]}.png`
    }
    const slideRight =()=>{
        counter = (counter+1)%arr.length
        img.src = `img/${arr[counter]}.png`
    }


    const img = document.getElementById('image')
    console.log(img.src);
    // img.src = `img/forms.png`

    const prevButton = document.getElementById('prev')
    prevButton.addEventListener('click',slideLeft)

    const nextButton = document.getElementById('next')
    nextButton.addEventListener('click',slideRight)


}

imgSlider()