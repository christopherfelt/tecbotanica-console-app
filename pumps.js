const inquirer = require("inquirer");

let runProgram = true;

let pinMap = {
  Potato_1: 1,
  Potato_2: 2, 
  Onion_1: 3, 
  Onion_2: 4,
  Carrot: 5,
}

async function main(){
  let result = "";
  while(runProgram){
      await getAnswer()
      .then((answer) =>{
        // NOTE: Cannot put activatePump function in here.  It does not wait. Await cannot also be used.  Is 'then' not an async function?
          if(answer.pump != "Exit"){
            result = answer.pump;
          } else {
              runProgram = false;
          }
      });
      if(!runProgram) break;
      await activatePump(result);
  }
}

function getAnswer() {
  return inquirer.prompt([
    {
      type: 'list',
      name: "pump",
      message: "Which is pump is it?",
      choices: [...Object.keys(pinMap), 'Exit' ],
    },
  ])

}


function activatePump(pump){
  // console.log(`Pump ${pump} on`);
  // console.log(`Activating Pin ${pinMap[pump]}`);
  // setTimeout(()=>{
  //   console.log(`Pump ${pump} off`);
  // }, 1000);
  console.log(`Pump ${pump} on`);
  console.log(`Activating Pin ${pinMap[pump]}`);
  return new Promise(resolve => setTimeout(() => resolve(console.log(`Pump ${pump} off`)), 1000))

}



main();

