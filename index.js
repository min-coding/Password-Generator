/** 
 * Charcode - https://www.ascii-code.com/
 * 
 * 1. Build array of all characters (passwordChar)
 * 
 * 2. Generate password
 * 
 *  2.1 Get random index to random value 
 *  and add to the array (randomChar) with loops x10
 * 
 *  2.2 Push the joined randomChar to PasswordArray 
 *  
 *  There should be 4 values in PasswordArray 
 * 
 * 3. Render
 * 
*/

const generateBtn = document.querySelector('#generate-password')
const passwordDisplay = document.querySelector('.password-results')

const uppercase = charArray(65,91)
const lowercase = charArray(97,123)
const numberAndChar = charArray(42,57)
let passwordChar = uppercase.concat(lowercase,numberAndChar)
let passwordArray = []

function charArray(low,high){
  const array = []
  for (i=low;i<high;i++){
    const num = Math.floor(Math.random() * (high - low) + low)
      const char = String.fromCharCode(i)
      array.push(char)
  }
  return array
}

function generatePassword(){
  for(a=0;a<4;a++){
    let randomChar = []

    for(i=0;i<10;i++){
      let letterIndex = Math.floor(Math.random() * passwordChar.length)
      randomChar.push(passwordChar[letterIndex])
    }
    passwordArray.push(randomChar.join(''))
  }
}

generateBtn.addEventListener('click',function(){
  passwordArray = []
  generatePassword()
  passwordDisplay.innerHTML = passwordArray.map(item =>{
    return `<div class='password'> ${item} </div>`
  }).join('')
})

