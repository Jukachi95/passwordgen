// const resultsEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboard = document.getElementById('clipboard');

// const randomFunc = {
    
    
//     lower: getlowerCase,
//     upper: getupperCase,
//     numbers: getNumbers,
//     symbols: getSymbols
// }

// generateEl.addEventListener('click', () => {
//     const length = +lengthEl.value;
//     const hasUpper = uppercaseEl.checked;
//     const hasLower = lowercaseEl.checked;
//     const hasNumber = numbersEl.checked;
//     const hasSymbol = symbolsEl.checked;

//     resultsEl.innerText = generatedPassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// })

// function generatedPassword(lower,upper,number,symbol,length){
//     let generatePassword = '';

//     const typesCount = lower+ upper + number + symbol;

//     const typesArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]);

//     if(typesCount === 0){
//         return '';
//     }


// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboard = document.getElementById('clipboard');

// const randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol
// }


// generateEl.addEventListener('click', () => {
// 	const length = +lengthEl.value;
// 	const hasLower = lowercaseEl.checked;
// 	const hasUpper = uppercaseEl.checked;
// 	const hasNumber = numbersEl.checked;
// 	const hasSymbol = symbolsEl.checked;
	
// 	// resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// 	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
// });

// function generatePassword(lower, upper, number, symbol, length) {
// 	let generatedPassword = '';
// 	const typesCount = lower + upper + number + symbol;
// 	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
// 	// Doesn't have a selected type
// 	if(typesCount === 0) {
// 		return '';
// 	}
	

    
//     for(let i=0; i<length; i+=typesCount) {
// 		typesArr.forEach(type => {
// 			const functionName = Object.keys(type)[0];
            
            
//             generatedPassword += randomFunc[functionName]();
// 		});
// 	}

//     const finalPassword = generatedPassword.slice(0, length);

//     return finalPassword;

// }

// // Function that generates characters

// function getRandomUpper(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }

// function getRandomLower(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }



// function getRandomNumber(){
//     return String.fromCharCode(Math.floor(Math.random * 10) + 48)
// }

// function getRandomSymbol(){
//     const symbols = '!£$*@#&'
//     return symbols[Math.floor(Math.random() * symbols.length)]
// }




// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboard = document.getElementById('clipboard');

// const randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol
// }


// generateEl.addEventListener('click', () => {
// 	const length = +lengthEl.value;
// 	const hasLower = lowercaseEl.checked;
// 	const hasUpper = uppercaseEl.checked;
// 	const hasNumber = numbersEl.checked;
// 	const hasSymbol = symbolsEl.checked;
	
// 	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// });

// function generatePassword(lower, upper, number, symbol, length) {
// 	let generatedPassword = '';
// 	const typesCount = lower + upper + number + symbol;
// 	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
// 	// Doesn't have a selected type
// 	if(typesCount === 0) {
// 		return '';
// 	}
	
// 	// create a loop
// 	for(let i=0; i<length; i+=typesCount) {
// 		typesArr.forEach(type => {
// 			const funcName = Object.keys(type)[0];
// 			generatedPassword += randomFunc[funcName]();
// 		});
// 	}
	
// 	const finalPassword = generatedPassword.slice(0, length);
	
// 	return finalPassword;
// }

// function getRandomLower() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
// 	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
// 	const symbols = '!@#$%^&*(){}[]=<>/,.'
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }









// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboard = document.getElementById('clipboard');

// const randomFunc = {
// 	lower: getLowerCase,
// 	upper: getUpperCase,
// 	number: getNumber,
// 	symbol: getSymbol
// }


// generateEl.addEventListener('click', () => {
// 	const length = +lengthEl.value;
// 	const hasLower = lowercaseEl.checked;
// 	const hasUpper = uppercaseEl.checked;
// 	const hasNumber = numbersEl.checked;
// 	const hasSymbol = symbolsEl.checked;
	
// 	// resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// 	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
// });

// function generatePassword(lowerNum, upperNum, number, symb, length) {
// 	let generatedPassword = '';
// 	const typesCount = lowerNum + upperNum + number + symb;
// 	const typesArr = [{lowerNum}, {upperNum}, {number}, {symb}].filter(item => Object.values(item)[0]);
	
// 	// Doesn't have a selected type
// 	if(typesCount === 0) {
// 		return '';
// 	}
	

    
//     for(let i=0; i<length; i+=typesCount) {
// 		typesArr.forEach(type => {
// 			const functionName = Object.keys(type)[0];      
//             generatedPassword += randomFunc[functionName]();
// 		});
// 	}

	

//     const finalPassword = generatedPassword.slice(0, length);

//     return finalPassword;

// }

// // Function that generates characters

// function getUpperCase(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }

// function getLowerCase(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }
  

// function getNumber(){
//     return String.fromCharCode(Math.floor(Math.random * 10) + 48)
// }

// function getSymbol(){
//     const symbols = '!£$*@#&'
//     return symbols[Math.floor(Math.random() * symbols.length)]
// }



// const generateEl = document.getElementById('generate');
// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbols = document.getElementById('symbols');


// generateEl.addEventListener('click', () =>{
//   resultEl.innerText = "Hi"
// })

// function getUpperCase(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }


const generateEl = document.getElementById('generate');
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const randomFunction = {
  lower: genLowerCase,
  upper: genUpperCase,
  number: genNumber,
  symbol: genSymbol
}


generateEl.addEventListener('click', () =>{
  const hasLength = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbols.checked;
  
//   resultEl.innerText = generateText(hasLower, hasUpper, hasNumber, hasSymbol, hasLength)
resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, hasLength)
})

function generatePassword(lower, upper, number, symbol, lengthVal){
  
    let generatedPassword = '';
  
    const typesSum = lower + upper + number + symbol;
  
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0 ]);

    console.log(typesArr)
  
    if(typesSum === 0){
      return '';
    }
  
//   for(i = 0; i < lengthVal; i+=typesSum){
//     typesArr.forEach(type => {
//       const functionName = Object.keys(type)[0];
//       generatedPassword += randomFunction[functionName]();
//     })
//   }

for(let i=0; i<lengthVal; i+=typesSum) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunction[funcName]();
    });
}

  
  const finalPassword = generatedPassword.slice(0, lengthVal);
 
      return finalPassword;
}



function genLowerCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function genUpperCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function genNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function genSymbol(){
  const symbol = '!£$%&*@';
  return symbol[Math.floor(Math.random() * symbol.length)]
}