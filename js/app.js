'use strict'
var userName = prompt('how is speaking !?');
alert(' welcome ' + userName + ' to my little page ')

var myname = prompt('my name is batool .. is that correct ?');
if (myname.toLowerCase() === 'y' || myname.toLowerCase() === 'yes') {
    //console.log('its WRONG answer , come on batool !!');
    alert('im very sad walla :( ')
}
else if (myname.toLowerCase() === 'n' || myname.toLowerCase() === 'no') {
    //console.log('correct answer');
    alert(' correct answer , thank you walla')

}
else {
    alert('invalid input');
}

var myfavclub = prompt(' i am a MADRIDISTA .. so i am a barcelona fan ?');
if (myfavclub.toLowerCase() === 'y' || myfavclub.toLowerCase() === 'yes') {
   // console.log('you have to watch bein sport batool ');
    alert(' of course not ya batool !')
}
else if (myfavclub.toLowerCase() === 'n' || myfavclub.toLowerCase() === 'no') {
    //console.log('correct answer .. finally :D');
    alert(' correct answer , you should become a madridista :D')
}
else {
    alert('invalid input');
}

var myfavmeal = prompt(' do you love MANSAF ?');
if (myfavmeal.toLowerCase() === 'y' || myfavmeal.toLowerCase() === 'yes') {
    //console.log('correct answer ');
    alert(' correct answer , me too :D ')
}
else if (myfavmeal.toLowerCase() === 'n' || myfavmeal.toLowerCase() === 'no') {
    //console.log('kef 3aysheh ente ? ');
    alert('y3ne i cant understand WHY !')
}
else {
    alert('invalid input');
}
var myfavplayer = prompt(' is my favorite player is zidane ?');
if (myfavplayer.toLowerCase() === 'y' || myfavplayer.toLowerCase() === 'yes') {
   // console.log('correct answer ');
    alert(' correct answer , he is the best of all time ')
}
else if (myfavplayer.toLowerCase() === 'n' || myfavplayer.toLowerCase() === 'no') {
    //console.log('laaaa3333 ');
    alert('-_-')
}
else {
    alert('invalid input');
}
var thisisyours = prompt(' is your favorite color is blue ? ');
if (thisisyours.toLowerCase() === 'y' || thisisyours.toLowerCase() === 'yes') {
    //console.log('correct answer ');
    alert(' correct answer , also me :D ')
}
else if (thisisyours.toLowerCase() === 'n' || thisisyours.toLowerCase() === 'no') {
    //console.log('its ok ');
    alert('make it blue ')
}
else {
    alert('invalid input');
}
alert(' thank you for your time ' + userName )
alert(' you have 4 attempts to get the correct answer.')
var score =0;
var total;
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
            score++;

            break;
        }else if (guess<correctanswer){
            alert('too low');
        }else alert ('too high');
    }
}
guessmyNum();

var players = ['Zidane','Messi','CR7'];
for (var i=1; i<=6;i++){
  var userN = prompt('Can you guess my best players of all time ?');  
    if(userN == players[0] || userN == players[1] || userN == players[2]){
      alert('nice answer');
        score++;
        break;
        }
        else   {
            alert('wrong'); 
        }
}

alert('my best players is '  + players);
alert('your score is ' + score);

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
