const quizData = [{
        question1: "Which of the following is a client site language?",
        a1: "Java",
        b1: "C",
        c1: "Python",
        d1: "JavaScript",
        correct1: "d1",
        question2: "What is the full form of JIT?",
        correct2: "just in time",
        question3: "Which one is correct?",
        a:"select one",
        a2:"JS can only be used for website designing",
        b2:"We can't change the value assigned by let",
        c2:"Parent function can't access child function's variables",
        d2:"JS can only run synchronously",
        correct3:"c2",
    },
    {
        question1: "What does HTML stand for?",
        a1: "Hypertext Markup Language",
        b1: "Cascading Style Sheet",
        c1: "Jason Object Notation",
        d1: "Helicopters Terminals ",
        correct1: "a1",
        question2:"What is the full form of DOM?",
        correct2:"document object model",
        question3: "Where should we write js code?",
        a:"select one",
        a2:"<Javascript> tag",
        b2:"<JS> tag",
        c2:"<JS code> tag",
        d2:"<script>tag",
        correct3:"d2",
    },

    {
        question1: "How you write Hello World in an alert box?",
        a1: `alertbox("Hello World")`,
        b1: `msg("Hello World)`,
        c1: `alert("Hello World")`,
        d1: `msgbox("Hello World")`,
        correct1: "c1",
        question2:"Which one translates and executes the code line by line?",
        correct2:"interpreter",
        question3: "How to create a function in javascript?",
        a:"select one",
        a2:"function: myFunction()",
        b2:"function myFunction()",
        c2: "function= myFunction()",
        d2:"myFunction()",
        correct3:"b2",
    },
    
];
let start = document.querySelector("#start");

//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");

let quiz= document.getElementById("quiz");
let time = document.querySelector("#time");
let index = 0;
let correct = 0;
let contact= document.getElementById("contact");
let personal=document.getElementById("personal");
let back= document.getElementById("mit");

let timer = 0;
let interval = 0;
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let q1=document.getElementById("ques1");
let allInputs = document.querySelectorAll(".answer");
let answerEl= document.querySelectorAll(".textans");
let first= document.getElementById("a_text");
let second= document.getElementById("b_text");
let third= document.getElementById("c_text");
let four= document.getElementById("d_text");

let q2=document.getElementById("ques3");
let ftext= document.getElementById("a");
let atext=document.getElementById("a2");
let btext=document.getElementById("b2");
let ctext=document.getElementById("c2");
let dtext=document.getElementById("d2");

let input= document.querySelectorAll(".person");
let dropdown= document.querySelectorAll(".option");




quiz.style.display="none";
//what happen when 'Start' Button Will Click

            
    guide.style.display = "block";



let countDown = () => {
    if (timer === 15) {
        clearInterval(interval);
        submit.click();
    } else {
        timer++;
        time.innerText = timer;
    }
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
            
        }
    )
    answerEl.forEach(
        (answerEl)=>{
            answerEl.value="";
        }
    )
    dropdown.forEach(
        (dropdo)=>{
        dropdo.value= "a2";
        }
    )
   
}


const loadQuestion = () => {
 
    reset()
    const x = document.getElementById("name").value;
    const mail=document.getElementById("mail").value;
    console.log(x+mail);
    if(x==""||mail==""){
        alert("Please provide personal infromation");
        guide.style.display="block";
        quiz.style.display="none";
        return false;
           
    }
    const data = quizData[index]
    if(index==0)
{
       back.style.display="none";
}
if (index==1||index==2)
{
    back.style.display="block";
}
    questionBox.innerHTML = data.question1;
    q1.innerHTML=data.question2;
    q2.innerHTML= data.question3;
    first.innerText = data.a1;
    second.innerText = data.b1;
    third.innerText = data.c1;
    four.innerText = data.d1;
    ftext.innerText= data.a;
    atext.innerText= data.a2;
    btext.innerText= data.b2;
    ctext.innerText= data.c2;
    dtext.innerText= data.d2;

    timer=0;
}

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
            else 
            {return false;}
          
        }
    )
    return ans;
}

function myfunc(){
   
    
        if(index==1){
        index--;
        loadQuestion();
        if(correct==1){
        correct=correct-1;}
        if(correct==2 ){
        correct=correct-2;}
        if(correct==3){
            correct=correct-3;
        }
    }
        
    if(index==2){
        index--;
        loadQuestion();
        if(correct==4){
        correct=correct-1;}
        if(correct==5 ){
        correct=correct-2;}
        if(correct==6){
            correct=correct-3;
        }

    }

}

let continueBtn= document.getElementById("Start");


continueBtn.addEventListener("click", () => {

    if(input.value=="")
    {
        alert("info");
        return false;
    }
    quiz.style.display = "block";
    guide.style.display = "none";
    result.style.display="none";
    
   
    interval = setInterval(countDown, 1000);
    loadQuestion();
    
});

let submit= document.querySelector("#submit");

submit.addEventListener(
    "click", () =>{
     
        const data = quizData[index];
        const ans = getAnswer();
        const ans2= document.getElementById("text1").value;
        const finalAns= ans2.toLowerCase();
        
        const ans3= document.getElementById("err").value;
        const x = document.getElementById("name").value;
         const mail=document.getElementById("mail").value;
      
        var answers= [data.correct1,data.correct2,data.correct3];
        console.log(answers);
         var responses=[ans,finalAns,ans3];
         console.log(responses);
         
         
            for(var i = 0; i < responses.length; i++){
                var res = responses[i];
                if(ans2==""|| ans===undefined)
                {
               
                   alert("Inputs can't be empty");
                   return false;
       
                }
                if(res === answers[i]){
                     correct++;
                     console.log(correct);
                } 
              
           }
           
    
           clearInterval(interval);
         
          
        index++;
           if(index<quizData.length){
            interval = setInterval(countDown, 1000);  
            loadQuestion();
               
           }
           else{
            
            //const person= document.getElementById("personal");
           
                document.getElementsByClassName("container")[0].innerHTML =  
                `
                        
                        
                        <h3 class="w-100"> Hii, you've scored ${correct} / 9 </h3>
                      <button class="buttons" onClick="location.reload()">Start again</button>
                `;
                personal.innerHTML=`Name: ${x} <br> mail: ${mail} `;

                
           }
        
    }
)





