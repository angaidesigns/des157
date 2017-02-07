// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var london = document.getElementById('london');
    var italy = document.getElementById('italy');

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
