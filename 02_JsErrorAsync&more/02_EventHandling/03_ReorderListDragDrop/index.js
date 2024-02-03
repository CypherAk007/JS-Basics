  const sortableList = document.getElementById("sortable")
  let draggedItem = null;

//   dragstart-> store the reference of the dragged item
//    and set its display to none
  sortableList.addEventListener("dragstart",(e)=>{
    // console.log(e.target);
    draggedItem = e.target
    setTimeout(()=>{
        e.target.style.display = "none"
    },0)
  })

  sortableList.addEventListener("dragend",(e)=>{
    setTimeout(()=>{
        e.target.style.display = ""
        draggedItem = null
    },0)
  })