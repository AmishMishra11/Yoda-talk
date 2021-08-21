var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function translateText(text) {
  return serverURL + "?" + "text=" + text;
}

function errorCatcher(error) {
  alert("server seems to be down try again later");
}

function clickEvent() {
  var inputText = txtInput.value;
  fetch(translateText(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translateText = json.contents.translated;
      output.innerText = translateText;
    })
    .catch(errorCatcher);
}

btnTranslate.addEventListener("click", clickEvent);
