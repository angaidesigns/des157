// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var create = document.getElementById('create');
    var createcont = document.getElementById('createcont');
    var close = document.getElementById('close');

    create.addEventListener('click', function(){
      createcont.style.display="block";
      // add a fade up?
    })

    close.addEventListener('click', function(){
      createcont.style.display="none";
    })
})

    // add a cursor hover
