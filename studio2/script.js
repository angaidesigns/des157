// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    console.log('reading');

document.ad.onsubmit = processForm;

function processForm() {

  var userName = document.ad.userName.value;
  var userJob = document.ad.userJob.value;
  var userSkill = document.ad.userSkill.value;
  var userC1 = document.ad.userC1.value;
  var userC2 = document.ad.userC2.value;
  var userC3 = document.ad.userC3.value;
  var userNum = document.ad.userNum.value;
  var userAd1 = document.ad.userAd1.value;
  var userAd2 = document.ad.userAd2.value;
  var userAd3 = document.ad.userAd3.value;
  var userAd4 = document.ad.userAd4.value;
  var userAdv = document.ad.userAdv.value;
  var userPlace = document.ad.userPlace.value;

  var myMsg = document.getElementById('myMsg')

  myMsg.innerHTML = 'This is a story of an adventurer named ' + userName + ' who is an aspiring ' + userJob + ', traveling the world to become the very best that no one ever was. Highly skilled in the magical arts of ' + userSkill + ', our adventurer is a force to be reckon with. Now this is not your normal adventure, in fact this is the very beginning. Anyway ' + userName + ' was on their way to ' + userPlace + 'ville, a small, ' + userAd1 + ' village with much needed ' + userJob + ' supplies. With a ' + userC1 + ', ' + userC2 + ', and ' + userC3 + ' colored robe (an odd choice of colors but who am I to judge), a ' + userAd2 + ' bag, and ' + userNum + ' copper piece(s), ' + userName + ' was ready to head out. As they made their way through the ' + userAd3 + ' path to ' + userPlace + 'ville, the spotted an old man who has fallen and just cannot get up. ' + userName + ' quickly rushed to aid the man only to be stoped by his ' + userAdv + ' hand, warning ' + userName + ' that the story has yet to be continued, refined,  and would run off into a pit of nothingness... The End?';

  //prevent page from reloading
  return false;

}

});
