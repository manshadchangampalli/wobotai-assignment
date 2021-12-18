const box = document.querySelectorAll(".boxs")
const boxs = document.querySelectorAll(".boxss")

box.forEach((item)=>{
    item.addEventListener("click",(e)=>{
       var current = document.querySelector(".boxs.active")
       current.classList.remove("active");
        e.target.classList.add("active")
    })
})
boxs.forEach((item)=>{
    item.addEventListener("click",(e)=>{
       var current = document.querySelector(".boxss.active")
       current.classList.remove("active");
        e.target.classList.add("active")
    })
})


setTimeout(()=>{
    document.querySelector(".popup").style.display="grid"

},3000)

const closeButtonClicked = () =>{
    document.querySelector(".popup").style.display="none"
}
const viewButtonClicked = () =>{
    
}