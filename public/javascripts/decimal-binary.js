 	let num1 = document.getElementById('num1');
let system2 = document.querySelectorAll('select')[0];
let form = document.getElementById('form');

form.onsubmit = (e) => {
	e.preventDefault();
	let resContainer = document.getElementsByClassName('result')[0];
	let systemsObj = {
		'decimal': 10,
		'hexadecimal': 16,
		'octal': 8,
		'binary': 2,
		'ternary': 3
	}
	let base = systemsObj[system2.selectedOptions[0].value];
	let result = transformDecimal(parseInt(num1.value), base);
	resContainer.innerHTML = '<p>Result is: ' + result + '</p>';
	resContainer.classList.remove('invisible');	
}

function transformDecimal(decimal, base) {
	let resArr = [];
	while(decimal >= base) {
		let module = decimal % base;
		resArr[resArr.length] = module;
		decimal = (decimal - module) / base;
	}
	resArr[resArr.length] = decimal;
	let result;
	if (base == 16) {
		let correspondingsObj = {
			10: 'A',
			11: 'B',
			12: 'C',
			13: 'D',
			14: 'E',
			15: 'F'
		}
		result = '';
		for(let i = resArr.length - 1; i >= 0; i--) {
			if(resArr[i] >= 10) {
				result += correspondingsObj[resArr[i]];
			} else {
				result += resArr[i];
			}
		}
		
	} else {
		result = 0;
		let power = 1;
		for(let i = 0; i < resArr.length; i++) {
			
			result += resArr[i] * power;
			power *= 10;
		}
	}
	
	return result;
}
 




