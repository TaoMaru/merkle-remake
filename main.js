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

//for(let aSlide of slides) {
 //   aSlide.addEventListener("transitionend", () => {
  //      aSlide.classList.add("hidden"),
   //     aSlide.classList.remove("slideAway")
        //aSlide.classList.add("visible")
    //});
//};

const slidesArray = Array.from(slides);
let nextSlide = 0;

let slideInID;
let removeSlideInOutID;
let removeSidelineID;
let removeSlideAwayID;
let slideTimeoutTime = 0.1;
let removeSidelineTimeoutTime = 5000;
let removeSlideAwayTimeoutTime = 2000;

let previousSlide;

function switchSlides() {
    
    clearAllTimeouts();

   // if(previousSlide !== undefined) {
    //    previousSlide.classList.remove("slideIn");
     //   previousSlide.classList.add("sideLine");
      //  previousSlide.classList.add("hidden");
    //};

    if(previousSlide !== undefined && 
        previousSlide.classList.contains("slideAway") ) {
            previousSlide.classList.add("hidden");
            previousSlide.classList.remove("slideAway");
            previousSlide.classList.add("sideline");
            previousSlide.classList.remove("slideIn");
        }
    

    previousSlide = slidesArray[nextSlide];

    console.log(slidesArray[nextSlide]);

    //slidesArray[nextSlide].classList.add("slideAway");
    moveSlideOut();
    console.log(slidesArray[nextSlide]);

    nextSlide++;
    if(nextSlide === 6) {
        nextSlide = 0;
    };
    console.log(slidesArray[nextSlide]);

    //previousSlide.addEventListener("transitionend", () => {
      //  slidesArray[nextSlide].classList.remove("hidden")
        //slidesArray[nextSlide].classList.remove("sideline")
        //slidesArray[nextSlide].classList.add("slideIn")
    //});
    if(previousSlide.classList.contains("slideAway")) {
        slidesArray[nextSlide].classList.remove("hidden");
    };
    //slidesArray[nextSlide].classList.add("slideIn");

    slideInID = setTimeout(bringSlideIn, slideTimeoutTime);
    
    
    removeSidelineID = setTimeout(removeSideline, removeSidelineTimeoutTime);

    //removeSlideAwayID = setTimeout(removeSlideAway, removeSlideAwayTimeoutTime);

    setTimeout(switchSlides, 6500);
        
};


//switchSlides();
function moveSlideOut() {
    slidesArray[nextSlide].classList.add("slideAway");
}


function removeSideline() {
    slidesArray[nextSlide].classList.remove("sideline");
}

function removeSlideInOut() {
    slidesArray[nextSlide].classList.remove("slideIn");
    slidesArray[nextSlide].classList.remove("slideAway");
    //slidesArray[nextSlide].classList.add("hidden");
};

function removeSlideAway() {
    previousSlide.classList.remove("slideAway");
    previousSlide.classList.add("hidden");
    previousSlide.classList.add("sideLine");
}

function changeSlidesWithDelay() {
    setTimeout(switchSlides, 6500);
};

function bringSlideIn() {
    slidesArray[nextSlide].classList.add("slideIn");
}

function clearAllTimeouts() {
    clearTimeout(slideInID);
    
    clearTimeout(removeSidelineID);
    
    //clearTimeout(removeSlideAwayID);
}

changeSlidesWithDelay();
