// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/*
// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

*/


// const timeoutId = setTimeout(() => {
//   console.log("Hey there, Ironhackers!");
// }, 100);

// let counter = 1;
// const callbackFunction = function () {
//   console.log(counter);
//   setTimeout(callbackFunction, 1);
 
//   counter += 1;
// };
 
// let timeoutId = setTimeout(callbackFunction, 4000);



//Não fuciona se não usar uma constante recebendo uma função:
// let counter = 0;
// function cabion() {
//   console.log(counter);
//   timeoutId = setTimeout(cabion(), 100);
 
//   counter += 1;
 
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// }
// let timeoutId = setTimeout(cabion(), 30000);

// let counter = 1;
// const callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 10);
 
//   counter += 1;
 
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// };
//  let timeoutId = setTimeout(callbackFunction, 3000);



//clearTimeout(timeoutId);

// Iteration 1 - using callbacks
// ...
let i = 1;
const intervalId = setInterval(function () {
  console.log(i);
 
  i++;
 
  if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000);
// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...