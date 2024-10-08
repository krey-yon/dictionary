const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById("result")
const sound = document.getElementById("sound")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    let inpword = document.getElementById("inp-word").value;
    fetch(`${url}${inpword}`)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = `
            <div class="word">
                <h3>${inpword}</h3>
                <button onclick = "playSound()">
                    <img src="assests/soundsvg.svg" alt="icon" width="24" height="24">
                </button>
            </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>// ${data[0].phonetic} //</p>
            </div>
            <p class="meaning">
            ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">${data[0].meanings[0].definitions[0].example || "Example"}</p>
        `;
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`)
        console.log(sound)
    })
    .catch((err) => {
        console.log(err)
        result.innerHTML = `<h3>Word Not Found</h3>`
    })
});

function playSound() {
    sound.play()
}