const bgImgCollection = ["assets/pexels-fernanda-latronico-763849.jpg",
            "assets/pexels-tim-douglas-6205492.jpg",
            "assets/pexels-jin-h-4215123.jpg",
            "assets/pexels-annam-w-1047442.jpg",
            "assets/pexels-andrea-piacquadio-3771088.jpg",
            "assets/pexels-george-dolgikh-giftpunditscom-2072168.jpg"];

const carouselDiv = document.querySelector(".carouselContainer");

const slide1 = document.querySelector(".carouselSlide");
slide1.addEventListener("click", (e) => {
    e.target.classList.toggle("slideAway")
});


const slides = carouselDiv.querySelectorAll(".carouselSlide");

let nextPic = 0;

function changeBgImg() {
    carouselDiv.setAttribute("style", 
            `background: url(${bgImgCollection[nextPic]}) 70% 0 no-repeat;
            background-size: cover;
            background-position-y: 60%;`);
    nextPic++;
    setTimeout(
        changeBgImg, 
            6500);
    if(nextPic === 6) {
        nextPic = 0;
    };
    
};

//changeBgImg();

for(let aSlide of slides) {
    aSlide.addEventListener("transitionend", () => {
        aSlide.classList.add("hidden"),
        aSlide.classList.remove("slideAway")
        //aSlide.classList.add("visible")
    });
};

const slidesArray = Array.from(slides);
let nextSlide = 0;

function switchSlides() {

    let previousSlide = slidesArray[nextSlide];

    console.log(slidesArray[nextSlide]);

    slidesArray[nextSlide].classList.add("slideAway");
    console.log(slidesArray[nextSlide]);

    nextSlide++;
    if(nextSlide === 6) {
        nextSlide = 0;
    };
    console.log(slidesArray[nextSlide]);

    //slidesArray[nextSlide].classList.remove("hidden");
    previousSlide.addEventListener("transitionend", () => {
        slidesArray[nextSlide].classList.remove("hidden"),
        slidesArray[nextSlide].classList.remove("sideline")
    });

    //slidesArray[nextSlide].classList.remove("hidden");
    //slidesArray[nextSlide].classList.add("slideIn");

    setTimeout(switchSlides, 6500);
        
};


//switchSlides();

function changeSlidesWithDelay() {
    setTimeout(switchSlides, 6500);
};



changeSlidesWithDelay();
