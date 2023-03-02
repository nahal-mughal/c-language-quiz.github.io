const questions = [
    {
        'ques': 'Who is the father of C language?',
        'a': 'Steve Jobs',
        'b': 'James Gosling',
        'c': 'Dennis Ritchie',
        'd': 'Rasmus Lerdorf',
        'correct': 'c'
    },
    {
        'ques': 'All keywords in C are in',
        'a': 'Lowecase',
        'b': 'Uppercase',
        'c': 'Camelcase',
        'd': 'none of the above',
        'correct': 'a'
    },
    {
        'ques': 'What is an example of iteration in C',
        'a': 'for',
        'b': 'while',
        'c': 'do-while',
        'd': 'all of above',
        'correct': 'd'
    },
    {
        'ques': 'Which of the following cannot be a variable name in C',
        'a': ' volatile',
        'b': 'true',
        'c': 'friend',
        'd': 'export',
        'correct': 'a'
    },
    {
        'ques': 'The C-preprocessors are specified with?',
        'a': '#',
        'b': '$',
        'c': '" "',
        'd': '&',
        'correct': 'a'
    },
    {
        'ques': 'The standard header ___ is used for implementing math functions',
        'a': '<stdio.h>',
        'b': '<stlib.h>',
        'c': '<math.h>',
        'd': '<stdarg.h >',
        'correct': 'c'
    },
    {
        'ques': 'Which of the following is not an operator in C',
        'a': ',',
        'b': 'sizeof()',
        'c': '~',
        'd': 'none',
        'correct': 'd'
    },
    {
        'ques': 'In C language, FILE is of which data type?',
        'a': 'int',
        'b': 'char *',
        'c': 'struct',
        'd': 'none of above',
        'correct': 'c'
    },
    {
        'ques': 'Output of code: 1 < 2 ? return 1: return 2;',
        'a': 'return 1',
        'b': 'return 2',
        'c': 'varies',
        'd': 'compile time error',
        'correct': 'd'
    },
    {
        'ques': `Predict output: 
        n = 1; printf("%d, %dn", 3*n, n++);`,
        'a': 'Output will be 3, 2',
        'b': 'Output will be 3, 1',
        'c': 'Output will be 6, 1',
        'd': 'output is compiler dependent',
        'correct': 'd'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestions = () => {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.ques}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h2>Quiz submitted Sucessfully.</h2>
    <h3>Score: ${right}/${total} are correct</h3>
    <div>`
}


//initial call
loadQuestions();