// https://www.ascii-code.com/

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












/**
 * Requirement
 * 
 * - 15 random characters 
 * - push 15 loop of random letters 33 to 126 
 * 
 * function getRandomArbitrary(33, 126) {
  return Math.random() * (126 - 33) + 33;
 * 

  const charArray = []
  const passwordArray =[]
  function generatePassword(){
    for (i<1;i<16;i++){
      charArray.push(Math.random() * (126 - 33) + 33)
    }
    for (i<0;i<15;i++){
      passwordArray[i] = String.fromCharCode(passwordArray[i])
    }
  }
 * 
 */