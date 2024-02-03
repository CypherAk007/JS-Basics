const n = document.getElementById('name')
const out = document.getElementById('display')
n.addEventListener('keydown',(e)=>{
    if (e.key==='Enter'){
        out.textContent = `Hello ${n.value}.`
    }
})