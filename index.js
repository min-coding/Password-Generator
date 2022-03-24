/** 
 * Charcode - https://www.ascii-code.com/
 * Requirement 
 * 
 * - 4 sets of 15 characters 
 * - 15 character comes from random number turned into string
 * - Use 61-122 to exclude < symbol which causes bug when rendering
 * 
*/

const generateBtn = document.querySelector('#generate-password')
const passwordDisplay = document.querySelector('.password-results')
let passwordArray = []

function generatePassword(){
  for (a=0;a<4;a++){
    const charArray = []
      for (i=0;i<15;i++){
        const num = Math.floor(Math.random() * (122 - 61) + 61)
          const char = String.fromCharCode(num)
          charArray.push(char)
      }
    const password = charArray.join("")
    passwordArray.push(password)
  }
}

generateBtn.addEventListener('click',function(){
  generatePassword()
  passwordDisplay.innerHTML = passwordArray.map(item =>{
    return `<div class='password'> ${item} </div>`
  }).join('')
  passwordArray = []
})

