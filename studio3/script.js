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
    london.addEventListener('mouseover', function() {
        londoninfo.style.opacity= 1;
    });
    london.addEventListener('mouseout', function() {
        londoninfo.style.opacity= 0;
    });


    italy.addEventListener('mouseover', function() {
        italy.style.opacity = 1;
        italy.src = 'images/italy.png';
    });
    italy.addEventListener('mouseout', function() {
        italy.style.opacity = 0;
        italy.src = 'images/italy.png';
    });
    italy.addEventListener('mouseover', function() {
        italyinfo.style.opacity= 1;
    });
    italy.addEventListener('mouseout', function() {
        italyinfo.style.opacity= 0;
    });


    quebec.addEventListener('mouseover', function() {
        quebec.style.opacity = 1;
        quebec.src = 'images/quebec.png';
    });
    quebec.addEventListener('mouseout', function() {
        quebec.style.opacity = 0;
        quebec.src = 'images/quebec.png';
    });
    quebec.addEventListener('mouseover', function() {
        quebecinfo.style.opacity= 1;
    });
    quebec.addEventListener('mouseout', function() {
        quebecinfo.style.opacity= 0;
    });


    hongkong.addEventListener('mouseover', function() {
        hongkong.style.opacity = 1;
        hongkong.src = 'images/hongkong.png';
    });
    hongkong.addEventListener('mouseout', function() {
        hongkong.style.opacity = 0;
        hongkong.src = 'images/hongkong.png';
    });
    hongkong.addEventListener('mouseover', function() {
        hongkonginfo.style.opacity= 1;
    });
    hongkong.addEventListener('mouseout', function() {
        hongkonginfo.style.opacity= 0;
    });


    seuol.addEventListener('mouseover', function() {
        seuol.style.opacity = 1;
        seuol.src = 'images/seuol.png';
    });
    seuol.addEventListener('mouseout', function() {
        seuol.style.opacity = 0;
        seuol.src = 'images/seuol.png';
    });
    seuol.addEventListener('mouseover', function() {
        seuolinfo.style.opacity= 1;
    });
    seuol.addEventListener('mouseout', function() {
        seuolinfo.style.opacity= 0;
    });


    paris.addEventListener('mouseover', function() {
        paris.style.opacity = 1;
        paris.src = 'images/paris.png';
    });
    paris.addEventListener('mouseout', function() {
        paris.style.opacity = 0;
        paris.src = 'images/paris.png';
    });
    paris.addEventListener('mouseover', function() {
        parisinfo.style.opacity= 1;
    });
    paris.addEventListener('mouseout', function() {
        parisinfo.style.opacity= 0;
    });


    taiwan.addEventListener('mouseover', function() {
        taiwan.style.opacity = 1;
        taiwan.src = 'images/taiwan.png';
    });
    taiwan.addEventListener('mouseout', function() {
        taiwan.style.opacity = 0;
        taiwan.src = 'images/taiwan.png';
    });
    taiwan.addEventListener('mouseover', function() {
        taiwaninfo.style.opacity= 1;
    });
    taiwan.addEventListener('mouseout', function() {
        taiwaninfo.style.opacity= 0;
    });
});
