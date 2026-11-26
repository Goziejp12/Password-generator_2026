const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBtn = document.getElementById('passwordBtn')
let generatedPasswordsOne = document.getElementById("generatedPasswordsOne")
let generatedPasswordsTwo = document.getElementById("generatedPasswordsTwo")

passwordBtn.addEventListener('click', function() {
    let randomIndexOne = ''
    let randomIndexTwo = ''
    for (let i = 0; i < 8; i++) {
        randomIndexOne += characters[Math.floor(Math.random() * characters.length)] 
        randomIndexTwo += characters[Math.floor(Math.random() * characters.length)] 
        generatedPasswordsOne.textContent = randomIndexOne
        generatedPasswordsTwo.textContent = randomIndexTwo
    }
})