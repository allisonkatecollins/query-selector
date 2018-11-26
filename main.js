// change textContent property of class article__header to "Welcome to the Allison blog"
const sectionE1 = document.querySelector(".article__header");
var text = sectionE1.textContent;
sectionE1.textContent = "Welcome to the Allison blog";

// change classList property of article__header elements to "important"
const sectionE2 = document.querySelectorAll(".article__header");
for (let i=0; i<sectionE2.length; i++) {
    sectionE2[i].classList.add("important");
}

// remove element with class of "dashed"
const sectionE3 = document.querySelectorAll(".dashed");
for (let i=0; i<sectionE3.length; i++) {
    sectionE3[i].classList.remove("dashed");
}

// add class of "goldenrod" to class "article__footer"
const sectionE4 = document.querySelectorAll(".article__footer");
for (let i=0; i<sectionE4.length; i++) {
    sectionE4[i].classList.add("goldenrod");
}