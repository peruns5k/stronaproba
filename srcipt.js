
// mobile menu 

const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".bars");
const iconX = document.querySelector(".times");
const list = document.querySelector(".list");
const listElement = document.querySelector(".list");
const listmobile = document.querySelector(".listmobile");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    list.classList.toggle("listmobile");



})

listElement.addEventListener("click", function () {

    list.classList.remove("listmobile");
    iconX.classList.remove("show");
    iconBurger.classList.add("show");

})



// autoscrolling menu

$('.first').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.second-page').offset().top
    }, 1000)

})

$('.second').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.third-page').offset().top
    }, 1000)

})




$('.third').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.four-page').offset().top
    }, 1000)

})


$('.four').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.five-page').offset().top
    }, 1000)

})



$('.five').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.six-page').offset().top
    }, 1000)

})


$('.six').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.seven-page').offset().top
    }, 1000)

})




$('.scrollup').on('click', function () {

    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 1000)

})
