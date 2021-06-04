var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured", error);
    outputDiv.innerText = "Too Many Requests: Rate limit of 5 requests per hour exceeded."
}

function clickHandler() {
    var translationUrl = getTranslationUrl(textInput.value)
    fetch(translationUrl)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener('click', clickHandler)