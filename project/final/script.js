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


    //form
    var title = document.getElementById("post-title");
    var name = document.getElementById("post-content");
    var story = document.getElementById("post-pass");
    var submitButton = document.getElementById("submit-button");
    var yourPosts = document.getElementById("your-posts");

    submitButton.addEventListener('click', function() {

        var mainTitle = title.value;
        var mainContent = name.value;
        var mainPass = story.value;

        var d = new Date();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        var year = d.getFullYear();

        var article = document.createElement("article");
        var article1 = document.createElement("article");

        if (anon.checked == true) {
            article.innerHTML = "<h4>" + mainTitle + "</h4> <h5>Anon</h5> <h5>Story</h5> <p>" + mainPass + "</p>";
        } else {
            article.innerHTML = "<h4>" + mainTitle + "</h4> <h5>Author</h5> <p>" + mainContent + "</p> <h5>Story</h5> <p>" + mainPass + "</p>";
        }

        yourPosts.insertBefore(article, yourPosts.childNodes[2]);
        title.value = "";
        name.value = "";
        story.value = "";

    });

    function writePost(userId, ptitle, pcontent, ppass) {
        firebase.database().ref().child("posts").push().set({
            title: ptitle,
            content: pcontent,
            pass: ppass
        });
    }


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
