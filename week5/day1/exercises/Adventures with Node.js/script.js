
const readline = require('readline');
const story = require('./story');
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ask(story.q);

var currentStage = story;


function ask(question){

    rl.question(`${question}: `, function(answer) {

        if (currentStage.answers.hasOwnProperty(answer)) {
            currentStage = currentStage.answers[answer];

            if (currentStage.q) {
            
                ask(`${currentStage.q} - ${Object.keys(currentStage.answers)} ?`);
    
            }
            else{
                currentStage.includes('lose') ? console.log( chalk(chalk.red(currentStage))) : console.log( chalk(chalk.green(currentStage)));
                rl.close();
            }
        }else{
            ask(currentStage.q);
        }
    });
}
