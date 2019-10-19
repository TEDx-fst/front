function Myhaide() {
    var A = document.getElementById('haide');
    if (A.style.display === "none") {
        A.style.display = "block";
    } else {
        A.style.display = 'none';
    }

    var A = document.getElementById('show');
    if (A.style.display === "block") {
        A.style.display = "none";
    } else {
        A.style.display = 'block';
    }
    var A = document.getElementById('haide1');
    if (A.style.display === "none") {
        A.style.display = "block";
    } else {
        A.style.display = 'none';
    }

    var A = document.getElementById('show1');
    if (A.style.display === "block") {
        A.style.display = "none";
    } else {
        A.style.display = 'block';
    }


}


function Myfor() {
    var form = document.getElementById('for')
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }

}

//////////////////////////////////////////////////////////////////////////////////// radwa part

//Get the button:
mybutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function bar(){

//     var icon = document.querySelectorAll('.icon');
//     var nav =document.querySelectorAll('.nav-links')
//     icon.addEventListener('click', () =>{
//         nav.classList.slideToggle('.nav-links')
//     })
// }

// bar();



// eslam part 

var btn1 = document.querySelector('.par1');
var btn2 = document.querySelector('.part2');
var btn3 = document.querySelector('.part3');
var btn4 = document.querySelector('.part4');
var partOne = document.querySelector('.part-one');
var partTwo = document.querySelector('.part-two');
var partThree = document.querySelector('.part-three');
var partFour = document.querySelector('.part-four');

function showPartOne() {
    partOne.style.display = "block", partTwo.style.display = "none", partThree.style.display = "none", partFour.style.display = "none";
}

function showPartTwo() {
    partTwo.style.display = "block", partOne.style.display = "none", partThree.style.display = "none", partFour.style.display = "none";
}

function showPartThree() {
    partTwo.style.display = "none", partOne.style.display = "none", partThree.style.display = "block", partFour.style.display = "none";
}

function showPartFour() {
    partTwo.style.display = "none", partOne.style.display = "none", partThree.style.display = "none", partFour.style.display = "block";
}