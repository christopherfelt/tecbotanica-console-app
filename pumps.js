const inquirer = require("inquirer");

let runProgram = true;

// async function question1() {
//   let answer = await inquirer
    // .prompt([
    //   {
    //     name: "pump",
    //     message: "Which is pump is it?",
    //   },
    // ])
//     .then((answers) => {
//       console.log("Answer: ", answers.pump);
//       runProgram = false;
//     });
// }

// function main() {
//   while (runProgram) {
//     question1();
//   }
// }

// main();

function getAnswer() {
  return inquirer.prompt([
    {
      name: "pump",
      message: "Which is pump is it?",
    },
  ]);

//   return answer.pumps;
}


async function main(){
    while(runProgram){
        await getAnswer().then((answer) =>{
            if(answer.pump < 5){
                console.log(answer.pump);
            } else {
                runProgram = false;
            }
        });
    }
}



main();

