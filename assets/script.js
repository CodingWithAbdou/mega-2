let currentDate = new Date().getFullYear();

const date = document.querySelector("footer .year");

date.innerText = currentDate;

AOS.init();
// init Aos
AOS.init({
    duration: 1200,
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    offset: 80, // offset (in px) from the original trigger point
    // once: true, // whether animation should happen only once - while scrolling down
});

let project = document.getElementById("project");
