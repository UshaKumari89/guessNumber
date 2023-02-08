let output = document.querySelector(".output");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

let numberGenerator = Math.floor(Math.random() * 100);

btn.addEventListener("click", function(){
  if(input.value == numberGenerator) {
    output.innerHTML = "Your guess is correct." + numberGenerator;
  } else if (input.value < numberGenerator) {
    output.innerHTML = "Your guess is low." 
  } else if (input.value > numberGenerator) {
    output.innerHTML = "Your guess is high." 
  }
  input.value = ''
  

});
