window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.transition = "0.8s";

setTimeout(() => {

loader.style.display = "none";

}, 800);

}, 1200);

});

// Fade In Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},{

threshold:0.1

});

const sections = document.querySelectorAll(

".about, .drop, .quote, .lookbook, .contact"

);

sections.forEach((section)=>{

section.style.opacity = "0";

section.style.transform = "translateY(60px)";

section.style.transition = "all 1s ease";

observer.observe(section);

});
