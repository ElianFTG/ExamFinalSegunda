import publivacio from "./verificacionPublicacion";

const first = document.querySelector("#texto");

const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;
  if(publivacio(firstNumber)){
    div.innerHTML = "<p>" + publivacio(firstNumber) + "</p>";
  }
  else{
    div.innerHTML = "<p>" + "No es posible  registrar un post sin ningun texto" + "</p>";
  }
});
