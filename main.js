// hamburg icon btn
const hamburgBtn = document.querySelector("#hamburg-btn");
//hamburg img
const hamburgImg = document.querySelector("#hamburg-img");
//dropdown content
const dropdownContents = document.querySelector("#dropdown-contents");
//add button listener
hamburgBtn.addEventListener("click", toggleMenu);

//toggles menu to show or not
function toggleMenu() {

    //adds and remove show class
    dropdownContents.classList.toggle("show");

    if (dropdownContents.classList.contains("show")) {
        hamburgImg.style.transform = 'rotate(90deg)';
    }
    else {
        hamburgImg.style.transform = 'rotate(0deg)';
    }
}

//img handler
//tracks what img is shown
var imgTracker = 2;

//get elements
const image = document.querySelector(".bg-img");
const flavourText = document.querySelector('.flavour-text');

//cycling image every 5 secs
setInterval(cycleImg, 5000);

function cycleImg() {
    imgTracker++;
    showImg();
}

//determines what gets shwon
function showImg() {
    //fade out current img
    image.style.opacity = '0';

    //'wraps' the images
    if (imgTracker > 6) {
        imgTracker = 1;
    }
    else if (imgTracker < 1) {
        imgTracker = 6;
    }
    //fade in next image
    setTimeout(function () {
        //switch src 
        switch (imgTracker) {
            case 1:
                image.src = './Images/ringo-starr.jpg';
                flavourText.innerHTML = 'Drummer: Ringo Star';
                break;
            case 2:
                image.src = './Images/chad-smith.jpeg';
                flavourText.innerHTML = 'Drummer: Chad Smith';
                break;
            case 3:
                image.src = './Images/dave-grohl.jpg';
                flavourText.innerHTML = 'Drummer: Dave Grohl';
                break;
            case 4:
                image.src = './Images/buddy-rich.jpg';
                flavourText.innerHTML = 'Drummer: Buddy Rich';
                break;
            case 5:
                image.src = './Images/neil-peart.jpg';
                flavourText.innerHTML = 'Drummer: Neil Peart';
                break;
            case 6:
                image.src = './Images/dave-weckl.jpg';
                flavourText.innerHTML = 'Drummer: Dave Weckl';
                break;
        }
        image.style.opacity = '1';
    }, 1000);
}

//for user to cycle through photos themselves
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

//if left click
leftArrow.addEventListener('click', function () {
    //go to prev img
    imgTracker--;
    showImg();
});

//if right click
rightArrow.addEventListener('click', function () {
    //go to next img
    imgTracker++;
    showImg();
});

//Page change

//btns
const page0Btn = document.querySelector('#Page0-btn');
const page1Btn = document.querySelector('#Page1-btn');
const page2Btn = document.querySelector('#Page2-btn');
const page3Btn = document.querySelector('#Page3-btn');

//Pages
const page0 = document.querySelector('#Page0');
const page1 = document.querySelector('#Page1');
const page2 = document.querySelector('#Page2');
const page3 = document.querySelector('#Page3');

function hideAllPages() {
    page0.style.display = "none";
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";

}
function showAllBtns() {
    page0Btn.style.display = "block";
    page1Btn.style.display = "block";
    page2Btn.style.display = "block";
    page3Btn.style.display = "block";
}
page0Btn.addEventListener("click", function () {
    hideAllPages();
    showAllBtns();
    page0.style.display = "block";
    page0Btn.style.display = "none";
});
page1Btn.addEventListener("click", function () {
    hideAllPages();
    showAllBtns();
    page1.style.display = "flex";
    page1Btn.style.display = "none";
});
page2Btn.addEventListener("click", function () {
    hideAllPages();
    showAllBtns();
    page2.style.display = "block";
    page2Btn.style.display = "none";
});
page3Btn.addEventListener("click", function () {
    hideAllPages();
    showAllBtns();
    page3.style.display = "block";
    page3Btn.style.display = "none";
});

//set menu to be seen
hideAllPages();
page0.style.display = "block";

//drumset
//sounds
const snareAudio = new Audio("./Audio/Snare.wav");
const kickAudio = new Audio("./Audio/Kick.wav");
const tom1Audio = new Audio("./Audio/Tom1.wav");
const tom2Audio = new Audio("./Audio/Tom2.wav");
const floortomAudio = new Audio("./Audio/FloorTom.wav");
const hihatAudio = new Audio("./Audio/Hihat.wav");
const crashAudio = new Audio("./Audio/Crash.wav");
const rideAudio = new Audio("./Audio/Ride.wav");


var drums = document.querySelectorAll(".drum-btn");

function drumClick(event) {
    var innerHTML = event.target.innerHTML;
    makeSound(innerHTML);
}
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", drumClick);
}

document.addEventListener("keypress", Keypress);
function Keypress(event) {
    const keyPressed = event.key;
    makeSound(keyPressed);
}

function makeSound(key) {
    switch (key) {
        case 's':
            snareAudio.play();
            break;
        case 'x':
            kickAudio.play();
            break;
        case 'w':
            tom1Audio.play();
            break;
        case 'e':
            tom2Audio.play();
            break;
        case 'd':
            floortomAudio.play();
            break;
        case 'a':
            hihatAudio.play();
            break;
        case 'q':
            crashAudio.play();
            break;
        case 'r':
            rideAudio.play();
            break;
    }
}

//rudiment page
//btns
const singleBtn = document.querySelector('#single-btn');
const doubleBtn = document.querySelector('#double-btn');
const paraBtn = document.querySelector('#paradiddle-btn');
const flamBtn = document.querySelector('#flam-btn');

//content
const single = document.querySelector('#single-content');
const double = document.querySelector('#double-content');
const para = document.querySelector('#paradiddle-content');
const flam = document.querySelector('#flam-content');

function hideAllRudiContent() {
    single.style.display = "none";
    double.style.display = "none";
    para.style.display = "none";
    flam.style.display = "none";
}

singleBtn.addEventListener("click", function () {
    hideAllRudiContent();
    single.style.display = "block";
});
doubleBtn.addEventListener("click", function () {
    hideAllRudiContent();
    double.style.display = "block";
});
paraBtn.addEventListener("click", function () {
    hideAllRudiContent();
    para.style.display = "block";
});
flamBtn.addEventListener("click", function () {
    hideAllRudiContent();
    flam.style.display = "block";
});

//set single as seen, hide others
hideAllRudiContent();
single.style.display = "block";

//quiz
const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, q3, q4, q5, score = 0;
function CheckAns() {
    score = 0; //reset score to 0, check ans and give score if correct
    //read the value of the selected radio button for q1
    q1 = document.querySelector("input[name='q1']:checked").value;
    if (q1 == "Backbeat") score++;

    //read the value of the selected radio button for q2
    q2 = document.querySelector("input[name='q2']:checked").value;
    if (q2 == "Swing") score++;

    //read the value of the selected radio button for q3
    q3 = document.querySelector("input[name='q3']:checked").value;
    if (q3 == "Backbeat") score++;

    //read the value of the selected radio button for q4
    q4 = document.querySelector("input[name='q4']:checked").value;
    if (q4 == "Swing") score++;

    //read the value of the selected radio button for q5
    q5 = document.querySelector("input[name='q5']:checked").value;
    if (q5 == "Bossa Nova") score++;

    scorebox.innerHTML = "Score:" + score;
}


