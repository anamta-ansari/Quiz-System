#! usr/bin/env node
import inquirer from "inquirer";
const questions = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "What is TypeScript",
        choices: ["A database management system", "A programming language for developing iOS apps",
            "A superset of JavaScript that adds static types"],
    },
    {
        name: "question2",
        type: "list",
        message: "Which command is used to install TypeScript?",
        choices: ["npm install typescript", "npm start typescript", "npm build typescript"],
    },
    {
        name: "question3",
        type: "list",
        message: "How do you define a variable with a string type in TypeScript?",
        choices: ['var name: string = "John"', 'const string name = "John"', 'let name = "John"'],
    },
    {
        name: "question4",
        type: "list",
        message: "which syntax is used to terminate the line",
        choices: [".", ";", ":"],
    },
    {
        name: "question5",
        type: "list",
        message: "which extension is used for typescript file",
        choices: [".cpp", ".js", ".ts"],
    },
]);
let score = 0;
switch (questions.question1) {
    case "A superset of JavaScript that adds static types":
        ++score;
        break;
}
switch (questions.question2) {
    case "npm install typescript":
        ++score;
        break;
}
switch (questions.question3) {
    case 'let name = "John"':
        ++score;
        break;
}
switch (questions.question4) {
    case ";":
        ++score;
        break;
}
switch (questions.question5) {
    case ".ts":
        ++score;
        break;
}
if (score === 5) {
    console.log(`Congratulations, You scored ${score} out of 5`);
}
else {
    console.log(`You scored ${score} out of 5`);
}
;
