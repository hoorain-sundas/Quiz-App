var questions = [
    {
      question: "Html Stands For ____________________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]
var currentQuestionNo = document.getElementById("currentQuestionNo");
var totalQuestionNo = document.getElementById("totalQuestionNo");
var displayQuestion = document.getElementById("displayQuestion");
var displayOption = document.getElementById("displayOption");
var currentIndex = 0;
var marks = 0;

function initRender(){
currentQuestionNo.innerHTML = currentIndex + 1;
totalQuestionNo.innerHTML = questions.length;
displayQuestion.innerHTML = questions[currentIndex].question;
displayOption.innerHTML = "";
for (var i=0; i<questions[currentIndex].options.length; i++){
    selectedOption = questions[currentIndex].options[i];
 displayOption.innerHTML += `<div class="col-md-6">
 <div id="displayOption">
   <button class="btn btn-outline-warning rounded-pill p-2 m-2 w-100 fs-3" onclick="checkAnswer('${selectedOption}','${questions[currentIndex].correctAns}')">${selectedOption}</button> 
   </div>
</div>`
if (document.getElementById("btn") == true){
    document.getElementById("btn").style.backgroundColor = "#ffba08"
}
}

}
initRender();

function checkAnswer(a,b){
    if (a == b){
        ++marks; 
        console.log(marks)
    }      
}
console.log(marks) 
console.log(questions.length)

var showResult =  document.getElementById("showResult");
var totalMarks = questions.length;


var result;
function nextQuestion(){
    
    if (currentIndex + 1 == questions.length){
        var percentage = eval((marks*100)/questions.length);
         console.log(percentage)
        if (percentage >= 50) {
            result = "Pass";
        } else {
            result = "Fail";
        }
        document.getElementById("showResult").style.display = "block";
     showResult.innerHTML = `<p>Marks: <span id="marks">${marks}</span></p>
     <p>Percentage: <span id="percentage">${percentage}</span></p>
     <p>Result: <span id="result">${result}</span></p>`
    } else {
        currentIndex++;
        initRender();
    } 

   
}

function prevQuestion(){
    if (currentIndex != 0){
    
        currentIndex--;
        initRender();
    }
}