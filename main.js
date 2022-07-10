const bgImgCollection = ["assets/pexels-fernanda-latronico-763849.jpg",
            "assets/pexels-tim-douglas-6205492.jpg",
            "assets/pexels-jin-h-4215123.jpg",
            "assets/pexels-annam-w-1047442.jpg",
            "assets/pexels-andrea-piacquadio-3771088.jpg",
            "assets/pexels-george-dolgikh-giftpunditscom-2072168.jpg"];

const carouselDiv = document.querySelector(".carouselContainer");

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

changeBgImg();


//transition: 0.8s ease;
//transition-delay: 2s;
    