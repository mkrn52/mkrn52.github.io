var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
const quesList = ["q1", "q2","q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
var currentQues = 0;
var numQues = 10;
const correctAnswers = ["q1_r2", "q2_r2", "q3_r3", "q4_r1", "q5_r2", "q6_r2", "q7_r3", "q8_r3", "q9_r2", "q10_r2"];
function radioPressed (id){
    console.log(id);
    if (correctAnswers.includes(id)){
        console.log("worked");
        incorrect.classList.add("d-none");
        correct.classList += "d-inline";
    }else{
        correct.classList.add("d-none");
        incorrect.classList += "d-inline";
    }
}
function nextQues (){
    var radios = document.getElementsByTagName('input');
    for (i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    incorrect.classList.add("d-none");
    correct.classList.add("d-none");

    currentQues += 1;
    if(currentQues == numQues+1){
        currentQues = 0;
    }
    var next = document.getElementById("next");
    if(currentQues == (quesList.length - 1)){
        next.disabled = true;
    }else{
        next.disabled = false;
    }
    var prev = document.getElementById("prev");
    if(currentQues > 0){
        prev.disabled = false;
    }else{
        prev.disabled = true;
    }    
    var ques = quesList[currentQues];
    quesList.forEach(name => {
        var anyQues = document.getElementById(name);
        console.log(name)
        anyQues.classList.add("d-none");
    });
    var currQues = document.getElementById(ques);
    currQues.classList += "d-inline";
}
function prevQues (){
    var radios = document.getElementsByTagName('input');
    for (i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    incorrect.classList.add("d-none");
    correct.classList.add("d-none");

    currentQues -= 1;
    if(currentQues == -1){
        currentQues = 1;
    }
    var next = document.getElementById("next");
    if(currentQues == (quesList.length - 1)){
        next.disabled = true;
    }else{
        next.disabled = false;
    }
    var prev = document.getElementById("prev");
    if(currentQues > 0){
        prev.disabled = false;
    }else{
        prev.disabled = true;
    }

    var ques = quesList[currentQues];
    quesList.forEach(name => {
        var anyQues = document.getElementById(name);
        anyQues.classList.add("d-none");
    });
    var currQues = document.getElementById(ques);
    currQues.classList += "d-inline";
}
