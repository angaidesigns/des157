// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here


      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyDbZtAKE47iE8_-MMUDlNQTxDcqV1UtRqQ",
          authDomain: "des157-e087a.firebaseapp.com",
          databaseURL: "https://des157-e087a.firebaseio.com",
          storageBucket: "des157-e087a.appspot.com",
          messagingSenderId: "790057239919"
      };
      firebase.initializeApp(config);

      var title = document.getElementById("title");
      var name = document.getElementById("name");
      var story = document.getElementById("story");
      var submit = document.getElementById("submit");

      function writePost(title, name, story) {
          firebase.database().ref().child("story").push().set({
              title: title,
              name: name,
              story: story
          });
      }

      submit.addEventListener('click', function() {
          var title = title.value;
          var name = name.value;
          var story = story.value;

          var d = new Date();
          var month = d.getMonth() + 1;
          var date = d.getDate();
          var year = d.getFullYear();

          var article = document.createElement("article");


          if (anon.checked == true) {
              article.innerHTML = "<h2>" + title + "</h2> <h3>Anonymous Poster</h3> <h3>" + month + "-" + date + "-" + year + "</h3> <br><h5>Today...</h5> <p>" + story + "</p> <br> <br><h5>I will pass it on by... </h5><br><br>";
          } else {
              article.innerHTML = "<h2>" + title + "</h2> <h3>" + name + "</h3> <h3>" + month + "-" + date + "-" + year + "</h3> <br><h5>Today...</h5> <p>" + story + "</p> <br><br> <h5>I will pass it on by... </h5><br><br>";
          }

          yourPosts.insertBefore(article, yourPosts.childNodes[2]);
          writePost(title, name, story);
          //postPage.style.display = "none";
          //thankYouPage.style.display = "block";

          title.value = "";
          name.value = "";
          story.value = "";

      });

      //create tab
      var create = document.getElementById('create');
      var createcont = document.getElementById('createcont');
      var close = document.getElementById('close');

      create.addEventListener('click', function() {
          createcont.style.display = "block";
      })
      close.addEventListener('click', function() {
          createcont.style.display = "none";
      })



      // about tab
      var about = document.getElementById('about');
      var aboutcont = document.getElementById('aboutcont');
      var close = document.getElementById('close2');

      about.addEventListener('click', function() {
          aboutcont.style.display = "block";
      })
      close.addEventListener('click', function() {
      aboutcont.style.display = "none";
      })
      })
