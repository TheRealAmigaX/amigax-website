// get the element with the id "spritesheet"
const spritesheet = document.getElementById("spritesheet");
// find a slider in the page
const slider = document.querySelector("input");
// create a variable for easy reference
let index;
// the gap of pixels for each part of the image. automatically set to element's width
const cellWidth = spritesheet.offsetWidth

slider.addEventListener('input', function () {
    // index variable will be the slider's value
    index = slider.value;
    // now to the advanced part.
    // when index reaches 6, loop back to 0.
    // multiply that value negatively by the cell width.
    spritesheet.style.backgroundPositionX = `${index % 6 * -cellWidth}px`
    // when index reaches 6, count up by 1.
    // multiply that value negatively by the cell height. will always be 400 px.
    spritesheet.style.backgroundPositionY = `${Math.floor(index / 6) * -400}px`
}, false);