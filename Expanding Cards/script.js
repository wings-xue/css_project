



const panels = document.querySelectorAll(".panel")

panels.forEach(function (panel) { 
    panel.addEventListener('click',function(event) {
   
        removeActiveClasses()
       
    
        event.target.classList.add("active")
     
    }) 
})


function removeActiveClasses() {
    panels.forEach(panel => {
     
        panel.classList.remove("active")
    })
}