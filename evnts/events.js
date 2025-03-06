// event listeners = listens for events to create interactive web pages, 
//                   events = click, mouseover, mouseout
//                   .addEventListener(click, function/arrow/anonymous function)

// event is an object provided by the browser when an even occurs it gives the details about what happened
const myBox = document.getElementById("myBox")
function changeColor(event){
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "OUCH"
}

myBox.addEventListener("click", changeColor)

// alt, myBox.addEventListener("click",(event)=>{
    // event.target.style.backgroundColor = "tomato"
    // event.target
// })

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "orange"
    event.target.textContent = "DON'T"
})

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "Click Me"
})