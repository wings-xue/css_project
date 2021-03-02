let curActive = 1


// 获取需要基于事件变形的对象
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")

let progress = document.querySelector(".progress")



prev.addEventListener("click", function(){
    update(curActive, "prev")
})

next.addEventListener("click", function(){
    debugger;
    update(curActive, "next")
   
})

function changeCurActive(curActive, opt) {
    if (opt == "next") {
        return curActive + 1
     
    }
    if (opt == "prev") {
        return curActive - 1
         
    }
  
}

function update(curActive, opt) {
    curActive = changeCurActive(curActive, opt)
    updateBotton(curActive)
    updateCircle(curActive)
    updateProgress(curActive)
}


function updateBotton(curActive) {
    if (curActive == 4) {
        next.disabled = true
        prev.disabled = false 
        return 
    } 
    if (curActive == 1) {
        next.disabled = false 
        prev.disabled = true 
        return 
    }
    
    next.disabled=false
    prev.disabled=false 

}

function updateCircle(curActive) {
    elements = document.querySelectorAll(".circle")
    for (let i = 0; i <= curActive; i++) {
        // 获取所有circle元素并且添加class=active
        element = elements[i]
        element.classList.add("active")
    }
}

function updateProgress(curActive) {
    progress.style["width"] = curActive/3 * 100 + "%"  
}