// Luetaan käyttöliittymän elementit muuttujiin

const button = document.querySelector('button') // valitsee painikkeen "Uusi rivi"
const table = document.querySelector('table') // valitse taulukon
const rivi = document.querySelector('p') // valitsee p-elementin rivien määrän valitsemineen

// Muuttuja, joka seuraa jokeririvien määrää
let rivimaara = 0; // alustetaan nollaksi

// Kuuntelija painikkeen painamiselle
button.addEventListener('click', () => {
    // Kutsutaan funktiota, joka lisää uuden jokeririvin taulukkoon
    addJokeriRow()

    // Päivittää rivien laskurin
    rivimaara++
    rivi.textContent = "Valmiita rivejä " + rivimaara
})

// Funktio, joka lisää jokeririvin taulukkoon
function addJokeriRow() {
    // Luo uuden rivin taulukkoon
    const row = table.insertRow()

    // Toistolause, joka luo 7 saraketta (solua) ja asettaa niihin satunnaislukuja
    for (let i=0; i < 7; i++) {
        const cell = row.insertCell(); // luo uuden solun
        const randomNumber = Math.floor(Math.random() * 10) // Luo satunnaisluvun välillä 0-9
        cell.textContent = randomNumber // asettaa solun sisällöksi satunnaisluvun
    }
}