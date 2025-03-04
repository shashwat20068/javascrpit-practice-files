// STEP 1 CREATE ELEMENT
const newh1 = document.createElement("h1")
// STEP 2 ADD ATTRIBUTES
newh1.textContent = "we all like something"
newh1.id = "myH1"
newh1.style.color = "red"
newh1.style.fontFamily = "helvetica"
newh1.style.textAlign = "center"
// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newh1)
// using prepend instead of append adds the element to the starting of the page (being the first child)
// document.getElementById("box1").append(newh1) 
// this line will add newh1 to box1 in the end text

const boxes = document.querySelectorAll(".box")
document.body.insertBefore(newh1, boxes)