function displayPoem(response) {

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

let userInput = document.querySelector("#user-input");
let apiKey = "b5a70e3dbaf3379o5576fffe161ca0t4";
let context = "You are a romantic Poem expert and love to write short poems. Your aim is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
let prompt = `User Instructions: Generate a poem about ${userInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML=`<div class="generating">⏳ Generating a poem about ${userInput.value}...</div>`

axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);