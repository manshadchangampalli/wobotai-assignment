const box = document.querySelectorAll(".boxs")
const boxs = document.querySelectorAll(".boxss")
const popup = document.querySelector(".popup")
const myDesign = document.querySelector(".mydesign")
const mainDesign = document.querySelector(".container")

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
    popup.style.display="grid"
},3000)

const closeButtonClicked = () =>{
    popup.style.display="none"
}
const viewButtonClicked = () =>{
    mainDesign.style.display="none"
    myDesign.style.display="grid"
}
const mydesignClose = ()=>{
    popup.style.display="none"
    myDesign.style.display="none"
    mainDesign.style.display="grid"
}