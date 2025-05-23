const modalElement = document.getElementById("modal");
const modalImgElement = document.getElementById("modal_img");
const altTxtElement = document.getElementById("alt_txt");

function showImgModal(e) {
    // disable scroll
    document.body.style.overflow = "hidden";
    
    modalElement.style.display = "flex";
    modalImgElement.style.backgroundImage = `url(${e.src})`;
    altTxtElement.innerHTML = e.alt;
    
    // hide alt text if there's none
    e.alt == "" ? altTxtElement.style.display = "none" : altTxtElement.style.removeProperty('display');
}

function hideImgModal() {
    // enable scroll
    document.body.style.removeProperty('overflow');
    
    modalElement.style.display = "none";
}