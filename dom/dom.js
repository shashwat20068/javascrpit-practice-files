// dom = our page is represented by and object and js gives us an api to interact/change structure or content with it

// element selctors = fncs used to target and manipulate HTML elements 

const myhead = document.getElementById("myhead")
myhead.style.backgroundColor = "blue"
myhead.style.textAlign = "center"

// document.getElementsByClassName() - html collection
// document.getElementsByTagName - html collection
// document.querySelector - element or NULL 
// document.querySelectorAll() - NODELIST


// DOM Navigation = navigating through structure of html using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// 1
const element = document.getElementById("fruits")
const firstChild = element.firstElementChild
firstChild.style.backgroundColor = "yellow"

// similarly for siblings childrens ids are selcted in order to select he next or previous sibling, for parent element you choose childrens id then parent elements id gets selected