

let curActive = {"count":1}

// 获取需要基于事件变形的对象
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")

let progress = document.querySelector(".progress")



prev.addEventListener("click", function(){
    update(curActive, "prev")
})

next.addEventListener("click", function(){

    update(curActive, "next")
   
})

function changeCurActive(curActive, opt) {
    if (opt == "next") {
        curActive.count ++ 
        // return curActive + 1
     
    }
    if (opt == "prev") {
        curActive.count --
        // return curActive - 1
         
    }
  
}

function update(curActive, opt) {
    // curActive = changeCurActive(curActive, opt)
    changeCurActive(curActive, opt)
    updateBotton(curActive)
    updateCircle(curActive)
    updateProgress(curActive)
}


function updateBotton(curActive) {
    let _curActive = curActive.count
    if (_curActive == 4) {
        next.disabled = true
        prev.disabled = false 
        return 
    } 
    if (_curActive == 1) {
        next.disabled = false 
        prev.disabled = true 
        return 
    }
    
    next.disabled=false
    prev.disabled=false 

}

function updateCircle(curActive) {
    let _curActive = curActive.count
    elements = document.querySelectorAll(".circle")
    for (let i = 0; i < 4; i++) {
        // 获取所有circle元素并且添加class=active
        element = elements[i]
        element.classList.remove("active")
    }

    for (let i = 0; i < _curActive; i++) {
        // 获取所有circle元素并且添加class=active
        element = elements[i]
        element.classList.add("active")
    }
}

function updateProgress(curActive) {
    let _curActive = curActive.count

    progress.style["width"] = (_curActive-1)/3 * 100 + "%"  
    

}