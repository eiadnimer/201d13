'use strict'
alert(' you have 4 attempts to get the correct answer.')
// guess= parseInt(guess);
var correctanswer = 55;
var attempts = 4;
var guesses = 0;
var count = 0;
function guessmyNum(){
    for (var i = 4; i>0 ; i--){
        var guess = prompt('can you guess my favorite number ? ' + i + ' attempts ')
        guess = Number(guess);
        while(!(Number.isInteger(guess)) || guess == ""){
            guess = prompt('can you guess my favorite number ? ' + i + ' attempts ')
            guess = Number(guess);
        }
        if(guess==correctanswer){
            count++;
            correctanswer++;
            alert('AWESOME!! you got me')
            break;
        }else if (guess<correctanswer){
            alert('too low');
        }else alert ('too high');
    }
}
guessmyNum();

var correct = false;
var totalguesses = 0;
var players = ['Zidane','Messi','CR7','Henry','Marcelo'];
var totalattempts = 6;
var usenN ;
function guessmyplayes () {
  for (var i = 0; i < totalattempts; i++) {
    usenN = prompt('Can you guess my best players of all time ? ' + i + ' attempts');
    for (var s = 0; s < players.length; s++) {
      if (players[s].toLowerCase() === usenN.toLowerCase()) {
        alert('good job' + players.toString());
        correct = true;
        totalguesses++;
             correctanswer++;
            break;
      }
    }
    if (correct){
      correctanswers++;
      break;
    }
    if(totalattempts === i + 1) {
      alert('your answer is not correct ' + players.toString());
      correct = true;
    }
    else {usenN = prompt('your answer is not correct .. try again please');
    }
  }
}
guessmyplayes();
console.log(correctanswers)
alert('You got ' + correctanswers + ' correct!!');

// var userName = prompt('how is speaking !?');
// alert(' welcome ' + userName + ' to my little page ')

// var myname = prompt('my name is batool .. is that correct ?');
// if (myname.toLowerCase() === 'y' || myname.toLowerCase() === 'yes') {
//     //console.log('its WRONG answer , come on batool !!');
//     alert('im very sad walla :( ')
// }
// else if (myname.toLowerCase() === 'n' || myname.toLowerCase() === 'no') {
//     //console.log('correct answer');
//     alert(' correct answer , thank you walla')

// }
// else {
//     alert('invalid input');
// }

// var myfavclub = prompt(' i am a MADRIDISTA .. so i am a barcelona fan ?');
// if (myfavclub.toLowerCase() === 'y' || myfavclub.toLowerCase() === 'yes') {
//    // console.log('you have to watch bein sport batool ');
//     alert(' of course not ya batool !')
// }
// else if (myfavclub.toLowerCase() === 'n' || myfavclub.toLowerCase() === 'no') {
//     //console.log('correct answer .. finally :D');
//     alert(' correct answer , you should become a madridista :D')
// }
// else {
//     alert('invalid input');
// }

// var myfavmeal = prompt(' do you love MANSAF ?');
// if (myfavmeal.toLowerCase() === 'y' || myfavmeal.toLowerCase() === 'yes') {
//     //console.log('correct answer ');
//     alert(' correct answer , me too :D ')
// }
// else if (myfavmeal.toLowerCase() === 'n' || myfavmeal.toLowerCase() === 'no') {
//     //console.log('kef 3aysheh ente ? ');
//     alert('y3ne i cant understand WHY !')
// }
// else {
//     alert('invalid input');
// }
// var myfavplayer = prompt(' is my favorite player is zidane ?');
// if (myfavplayer.toLowerCase() === 'y' || myfavplayer.toLowerCase() === 'yes') {
//    // console.log('correct answer ');
//     alert(' correct answer , he is the best of all time ')
// }
// else if (myfavplayer.toLowerCase() === 'n' || myfavplayer.toLowerCase() === 'no') {
//     //console.log('laaaa3333 ');
//     alert('-_-')
// }
// else {
//     alert('invalid input');
// }
// var thisisyours = prompt(' is your favorite color is blue ? ');
// if (thisisyours.toLowerCase() === 'y' || thisisyours.toLowerCase() === 'yes') {
//     //console.log('correct answer ');
//     alert(' correct answer , also me :D ')
// }
// else if (thisisyours.toLowerCase() === 'n' || thisisyours.toLowerCase() === 'no') {
//     //console.log('its ok ');
//     alert('make it blue ')
// }
// else {
//     alert('invalid input');
// }
// alert(' thank you for your time ' + userName )