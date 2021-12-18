const box = document.querySelectorAll(".boxs")

box.forEach((item)=>{
    item.addEventListener("click",(e)=>{
       var current = document.querySelector(".boxs.active")
       current.classList.remove("active");
        e.target.classList.add("active")
    })
})