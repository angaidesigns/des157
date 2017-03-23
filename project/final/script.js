// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //create tab
    var create = document.getElementById('create');
    var createcont = document.getElementById('createcont');
    var close = document.getElementById('close');

    create.addEventListener('click', function(){
      createcont.style.display="block";
    })
    close.addEventListener('click', function(){
      createcont.style.display="none";
    })

    // about tab
    var about = document.getElementById('about');
    var aboutcont = document.getElementById('aboutcont');
    var close = document.getElementById('close2');

    about.addEventListener('click', function(){
      aboutcont.style.display="block";
    })
    close.addEventListener('click', function(){
      aboutcont.style.display="none";
    })
})
