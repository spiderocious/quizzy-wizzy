const url = window.location.search;
const searchParams = new URLSearchParams(url);

const username = searchParams.get("username");

var currentQuestionNumber = 0;
const answers = [];

if (!username) {
  window.location.href = "../../index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("welcome-text").innerText = `Welcome ${username}`;
  getQuestion();
});

// load correct question
// store answers
// move to next or back
// score.

function getQuestion(){
    if(currentQuestionNumber >= questions.questionsList.length){
        scoreTest();
        return;
    }
    const question = questions.questionsList[currentQuestionNumber];
    document.getElementById('question').innerText = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    for(let i =0; i< question.options.length; i++){
        const currentOption = question.options[i];
        const optionContainer = document.createElement("div");
        optionContainer.setAttribute('class', "p-2 border border-[#3679f1] flex items-center justify-start gap-3 cursor-pointer hover:bg-[#E5E5E5] transition-all duration-1")

        const optionNumber = document.createElement("div")
        optionNumber.setAttribute('class', "rounded-full h-12 w-12 bg-[#f2d84c] flex items-center justify-center font-bold")
        optionNumber.innerHTML = currentOption.id;
        
        const optionText = document.createElement("span");
        optionText.innerText = currentOption.option;

        optionContainer.appendChild(optionNumber);
        optionContainer.appendChild(optionText);
        optionContainer.addEventListener("click", () => {
            answers.push(currentOption.id);
            currentQuestionNumber++;
            getQuestion();
        })
        

        optionsContainer.appendChild(optionContainer);
    }

}

function scoreTest(){
    const correctAnswersList = questions.questionsList.map((question) => question.correctAnswer);
    // [1,2,3,4,5,6,7]
    let score = 0;
    for(let i=0; i < correctAnswersList.length; i++){
        const correctAnswer = correctAnswersList[i]; // 1,2,3
        const submittedAnswer = answers[i];
        
        if(correctAnswer === submittedAnswer){
            score++;
        }
        
    }
    alert(`You scored - ${score}/${correctAnswersList.length}`)
}
