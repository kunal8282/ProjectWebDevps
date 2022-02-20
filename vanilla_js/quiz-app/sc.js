const quizData = [
    {
        question: "To which one of the following types of vegetation does rubber belong to",
        a: "Tundra",
        b: "Tidal",
        c: "Himalayan",
        d: "Tropical EverGreen",
        correct: "d",
    },
    {
        question: "Cinchona trees are found in the areas of rainfall more than",
        a: "100 cm",
        b: "50 cm",
        c: "70 cm",
        d: "less than 50 cm",
        correct: "a",
    },
    {
        question: "Which term is used for the original plant cover of an area which has grown naturally?",
        a: "Garden",
        b: "Agriculture",
        c: "Virgin Vegetation",
        d: "Indigenous species",
        correct: "c",
    },
    {
        question: "Which one of the following species is found in Tibet area?",
        a: "Yak",
        b: "Shaggy-Horned wild Ox",
        c: "Tibetan antelpoe",
        d: "All of the above",
        correct: "d",
    },
];

let currentQuest = 0;
let score = 0;


const cont = document.querySelector('.container');
const question = document.querySelector("#question")
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')

const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const answer = document.querySelectorAll('.answer');

loadQuiz()

function loadQuiz(params) {
    deselect()
    const current = quizData[currentQuest];
    question.innerHTML = current.question;

    a_text.innerHTML = current.a;
    b_text.innerHTML = current.b;
    c_text.innerHTML = current.c;
    d_text.innerHTML = current.d;

    // currentQuest++;

}

function selected(){
    
    let answers = undefined;
    answer.forEach(element => {
        if(element.checked){
            answers =  element.id;
        }
    });

    return answers;
}

function deselect(){
    answer.forEach(element => {
       element.checked = false;
    });
}

const btn = document.querySelector("#btn");


// console.log(btn);
btn.addEventListener("click",()=>{
    const ans = selected();

    if(ans){
        if(ans===quizData[currentQuest].correct){
            score++;
        }

        currentQuest++;
        if(currentQuest<quizData.length){
            loadQuiz();
        }
        else{
            cont.innerHTML = `<h2>You Answer correctly ${score}/${quizData.length} question</h2>
            <a onclick="location.reload()">Reload</a>`
        }
    }
    else{
        alert("Choose One Option")
    }
    
})
