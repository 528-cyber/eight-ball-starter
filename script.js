/*
  Magic 8 Ball
  Name:
  Period: 
*/

function askEightBall() {

  // Get input values
  let userName = document.getElementById('nameInput').value
  let userQuestion = document.getElementById('questionInput').value
  console.log(userName, userQuestion)

  // Show the question on the site
  document.getElementById('questionOut').textContent = "You asked: " + userQuestion



  //Greet the user!
  let greeting

  if (userName === "") {
    greeting = "Hello Mystery Person!"
  } else {
    greeting = `Hello, ${userName}!`
  }

  document.getElementById('greeting').textContent = greeting

  //check the question 

  if (userQuestion === "") {
    document.getElementById('questionOut').textContent = ''
    document.getElementById('answer').textContent = "The 8Ball needs a question to work, you absolute failure to society! You are NOTHING but a BUG underneath the foot of the revolutionaries before you. You enjoy the fruits of your ancestors, yet dissapoint them with your lack of basic intelligence."
    document.getElementById('answerType').innerHTML = ''
    return
  }

  //get a random number
  let randomNumber = Math.floor(Math.random() * 8)
  //Get the Magic 8Balls answer
  let eightBall = ''
  switch (randomNumber) {
  case randomNumber = 7:
    eightBall = 'It is certain';
    break;
  case randomNumber = 6:
    eightBall = 'It is decidedly so';
    break;
  case randomNumber = 5:
    eightBall = 'Reply hazy try again';
    break;
  case randomNumber = 4:
    eightBall = 'Cannot predict now';
    break;
  case randomNumber = 3:
    eightBall = 'Do not count on it';
    break;
  case randomNumber = 2:
    eightBall = 'My sources say no';
    break;
  case randomNumber = 1:
    eightBall = 'Outlook not so good';
    break;
  case randomNumber = 0:
    eightBall = 'Signs point to yes';
    break;
}
    document.getElementById('answer').textContent = `${eightBall}`
  //Show the 8Ball answer type badge





}