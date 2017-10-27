let num1 = document.getElementById('num1');
let formRadio = document.getElementById('formRadio');

formRadio.onsubmit = (e) => {
	e.preventDefault();
	let resContainer = document.getElementsByClassName('result')[0];
	let checkedSystem = document.querySelector('input[name="radioSys"]:checked').value;
	let result = parseInt(num1.value).toString(parseInt(checkedSystem));
	resContainer.innerHTML = '<p>Result is: ' + result + '</p>';
	resContainer.classList.remove('invisible');	
}