'use: strict';

//create variable for tally of correct answers to be displayed at end of game
var correctAnswers = 0;

//ask user for their name and if they would like to play my guessing game
var name = prompt('Hello there! Glad you stopped by today. What\'s your name?');
var playGame = prompt('Hello ' + name + '!' + ' Would you like to get to know me a little better through my guessing game? Type "y" or "yes" for yes or "n" or "no" for no.');
console.log('Would you like to get to know me? Enter yes or no');
if (playGame.toLowerCase() === 'y' || playGame.toLowerCase() === 'yes') {
  console.log('Yes, you would like to play my guessing game.');
  alert('Wonderful! Let\'s play :)');

//first question about whether I was born in Seattle?
  var seattle = prompt('I was born in Washington state');
  console.log('Q1: I was born in WA state');
  console.log('User A1: ' + seattle);
  console.log('Correct A1: No');
  if (seattle.toLowerCase() === 'y' || seattle.toLowerCase() === 'yes') {
    alert('Good try! But the answer is no');
  }
  else if (seattle.toLowerCase() === 'n' || seattle.toLowerCase() === 'no') {
    alert('A correct answer on the first try! Aren\'t you off to a good start?');
    correctAnswers++;
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//second question about my college major
  var major = prompt('In college I majored in chemistry');
  console.log('Q2: I majored in chemistry');
  console.log('User A2: ' + major);
  console.log('Correct A2: No');
  if (major.toLowerCase() === 'y' || major.toLowerCase() === 'yes') {
    alert('Good try! But that isn\'t the right answer');
  }
  else if (major.toLowerCase() === 'n' || major.toLowerCase() === 'no') {
    alert('Good job! You got it right!');
    correctAnswers++;
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//third question about how long I studied German
  var german = prompt('I spent five years studying German in school');
  console.log('Q3: I studied German for 5 years');
  console.log('User A3: ' + german);
  console.log('Correct A3: Yes');
  if (german.toLowerCase() === 'y' || german.toLowerCase() === 'yes') {
    alert('High five! You got it!');
    correctAnswers++;
  }
  else if (german.toLowerCase() === 'n' || german.toLowerCase() === 'no') {
    alert('So close! But the answer is yes');
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//fourth question about where I went to college
  var college = prompt('I went to Colgate University in central New York');
  console.log('Q4: I went to Colgate University');
  console.log('User A4: ' + college);
  console.log('Correct A4: Yes');
  if (college.toLowerCase() === 'y' || college.toLowerCase() === 'yes') {
    alert('Well done! You\'re doing really well');
    correctAnswers++;
  }
  else if (college.toLowerCase() === 'n' || college.toLowerCase() === 'no'){
    alert('Sorry, you missed that one');
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//fifth question about my love of scuba diving
  var scuba = prompt('Scuba diving is one of my favorite activities');
  console.log('Q5: Scuba diving is my favorite activity');
  console.log('User A5: ' + scuba);
  console.log('Correct A5: Yes');
  if (scuba.toLowerCase() === 'y' || scuba.toLowerCase() === 'yes') {
    alert('Wow! You know me really well!');
    correctAnswers++;
  }
  else if (scuba.toLowerCase() === 'n' || scuba.toLowerCase() === 'no'){
    alert('Awww, that\'s not the right answer :(');
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//sixth question where user guesses a number; four tries
  var number = prompt('Guess how many years I worked in elementary schools');
  console.log('Q6: Guess how many years I worked in elementary schools');
  console.log('Correct A6: 2');
  var i = 0;
  for (var i = 0; i < 4; i++) {
    if (parseInt(number) === 2){
      alert('Great guess! How did you know that...');
      correctAnswers++;
      break;
    }
    else if (parseInt(number) < 2){
      alert('You\'re guess is too low');
      number = prompt('Guess again');
    }
    else if (parseInt(number) > 2){
      alert('That\'s too high');
      number = prompt('Guess again');
    }
    else {
      alert('Is that even a number???');
      number = prompt('Do better this time');
    }
    console.log('User A2: ' + number);
  }

//seventh question about
  interestArray = ['code','bike', 'swim', 'bake', 'read', 'hike'];
  var interest = prompt('What do you think are my favorite activities to do?');
  var allInterests;
  var message = 'I would have accepted ';
  var i = 0;
  while (i < interestArray.length) {
    message += interestArray[i] + ', ';
    i++;
  }
  counter = 5;
  for (var i = 0; i < 6; i++){
    if (interestArray.includes(interest.toLowerCase())) {
      alert('Great!' + message + interestArray[5]);
      correctAnswers++;
      break;
    }
    else if (!interestArray.includes(interest.toLowerCase()) && counter !== 0) {
      alert('No, that\'s not one of my favorite things');
      interest = prompt('Take another guess! You have ' + counter + ' guess(es) left');
      counter -= 1;
    }
    else {
      alert('Good try. ' + message);
    }
    console.log('User A2: ' + interest);
  }

  //display game result with personalized message for user
  scoreMessage = 'Thanks for playing my game ' + name + '. ' + 'You got ' + correctAnswers + ' answers correct out of seven questions.';
  if (correctAnswers < 4) {
    alert(scoreMessage + ' You\'ll do better next time.');
  }
  else {
    alert(scoreMessage + ' Fantastic! Keep being awesome.');
  }
  console.log(correctAnswers + ' answers correct of seven questions');
}

else {
  alert('That\'s too bad. Maybe another time.');
  console.log('No, you do not want to play');
}
