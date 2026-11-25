// 1. Get the part of the page we want to control

const picture = document.querySelectorAll(".place");  // all the tourist picture
const lighbox = document.getElemmentById("lightbox"); //the big picture box
const lightboxImg=document.getElementById("lightbox-img");
const lighboxCaption=document.getElementById("lightbox-caption");
const nextBtn=document.getElementById("next-btn");
const closeBtn=document.getElementById("close-btn");
const topBtn=document.getElementById("top-btn");

//Remember which picture is showing (0-the first one)
let current=0;

// 2. show a picture in the big box

function showpictures (index) {
    current=index;
    lightboxImg.src=picture[index].src;
    lightboxImg.atl=picture[index].atl;

    //The caption is the figcaption that come right after the picture lightboxcaption.texcontent=picture[index].nextElementsibling.textcontent;

    lighbox.hidden=false;  // make the box visible
}

// 3. Click a piicture to enlarge it

picture.forEach(function(picture, index){
    picture.addEventListener("click", function() {
        showpictures (index);
     });
    });

    //4. Next button: go to the next picture, then start again at the first

    nextBtn.addEventListener("click", function() {
        showpicture((current + 1) % picture.length);
    });

    // 5. Cliose button (clicking the dark backgrond aslo closesnit)

    closeBtn.addEventListener("click", function () {
        lighbox.hidden = true;
    });

    lighbox.addEventListener("click", function (event) {
        if (event.target === lighbox) {
            lighbox.hidden = true;
        }
    });

    // 6. Back to top button: only show it after scrolling down a bit
    window.addEventListener("scroll", function (){
        topBtn.hidden = window.scrollY < 300;
    });

    topBtn.addEventListener("click", function () {
        width.scrollTo({ top: 0, behavior: "smooth" });
    });