// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var x=userInput[0];
var odd=(function(str)
{
    
    console.log(str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
})(x)

  //end-here
});
