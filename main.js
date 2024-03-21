#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("The Fire Calculator\n");
    await sleep();
    rainbowTitle.stop();
}
function printAsciiArt(text) {
    return new Promise((resolve, reject) => {
        figlet.text(text, {
            font: "Fire Font-k",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        }, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                console.log(data);
                resolve();
            }
        });
    });
}
async function run() {
    console.clear();
    await welcome();
    await printAsciiArt("FireCalculator");
    const answer = await inquirer.prompt([
        { message: "Enter first number", type: "number", name: "num1" },
        { message: "Enter second number", type: "number", name: "num2" },
        {
            message: "Select one of the operators to perform operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    // Conditional statement to perform the operation based on the selected operator
    if (answer.operator === "Addition") {
        answer.result = answer.num1 + answer.num2;
        console.log("Your value is ", answer.num1 + answer.num2);
    }
    else if (answer.operator === "Subtraction") {
        console.log("Your value is ", answer.num1 - answer.num2);
        answer.result = answer.num1 - answer.num2;
    }
    else if (answer.operator === "Multiplication") {
        console.log("Your value is ", answer.num1 * answer.num2);
        answer.result = answer.num1 * answer.num2;
    }
    else if (answer.operator === "Division") {
        console.log("Your value is ", answer.num1 / answer.num2);
        answer.result = answer.num1 / answer.num2;
    }
    else {
        console.log("Invalid operator");
    }
}
run();
