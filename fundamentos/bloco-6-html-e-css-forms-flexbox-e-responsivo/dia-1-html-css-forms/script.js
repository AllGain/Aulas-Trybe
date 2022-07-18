function submit(event) {
  event.preventDefault();
}

window.onload = function () {
  const clearBtn = document.querySelector("#limpar");
  clearBtn.addEventListener("click", clearFields);
  const submitBtn = document.querySelector("#botaoEnviar");
  submitBtn.addEventListener("click", submit);
};
function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}
