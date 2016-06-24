//Create Quesstions

var questions = [
  new Question("Who is the director of Star Wars VII?", ["J.J. Abrams", "Joss Whedon"], "J.J. Abrams"),
  new Question("Who is Buffy's true love?", ["Spike", "Angel"], "Angel"),
  new Question("The Green Arrow is the alter-ego of what billionaire?", ["Oliver Queen", "Lex Luthor"], "Oliver Queen"),
  new Question("Scartlett Johansen plays which of the Avengers?",["Black Widow", "Pepper Potts"], "Black Widow" ),
  new Question("What Italian province is home to Ezio Auditore?", ["Firenze", "Sicily"], "Firenze" )
];

//Create quiz
var quiz = new Quiz(questions);

//Display quiz
QuizUI.displayNext();
