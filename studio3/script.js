// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var london = document.getElementById('london');
    var italy = document.getElementById('italy');
    var quebec = document.getElementById('quebec');
    var hongkong = document.getElementById('hongkong');
    var seuol = document.getElementById('seuol');
    var paris = document.getElementById('paris');
    var taiwan = document.getElementById('taiwan');

    london.addEventListener('mouseover', function() {
        london.style.opacity = 1;
        london.src = 'images/london.png';
    });
    london.addEventListener('mouseout', function() {
        london.style.opacity = 0;
        london.src = 'images/london.png';
    });

    italy.addEventListener('mouseover', function() {
        italy.style.opacity = 1;
        italy.src = 'images/italy.png';
    });
    italy.addEventListener('mouseout', function() {
        italy.style.opacity = 0;
        italy.src = 'images/italy.png';
    });

    quebec.addEventListener('mouseover', function() {
        quebec.style.opacity = 1;
        quebec.src = 'images/quebec.png';
    });
    quebec.addEventListener('mouseout', function() {
        quebec.style.opacity = 0;
        quebec.src = 'images/quebec.png';
    });

    hongkong.addEventListener('mouseover', function() {
        hongkong.style.opacity = 1;
        hongkong.src = 'images/hongkong.png';
    });
    hongkong.addEventListener('mouseout', function() {
        hongkong.style.opacity = 0;
        hongkong.src = 'images/hongkong.png';
    });

    seuol.addEventListener('mouseover', function() {
        seuol.style.opacity = 1;
        seuol.src = 'images/seuol.png';
    });
    seuol.addEventListener('mouseout', function() {
        seuol.style.opacity = 0;
        seuol.src = 'images/seuol.png';
    });

    paris.addEventListener('mouseover', function() {
        paris.style.opacity = 1;
        paris.src = 'images/paris.png';
    });
    paris.addEventListener('mouseout', function() {
        paris.style.opacity = 0;
        paris.src = 'images/paris.png';
    });

    taiwan.addEventListener('mouseover', function() {
        taiwan.style.opacity = 1;
        taiwan.src = 'images/taiwan.png';
    });
    taiwan.addEventListener('mouseout', function() {
        taiwan.style.opacity = 0;
        taiwan.src = 'images/taiwan.png';
    });
});
