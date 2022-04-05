const form = document.getElementById('card-form');
const isAlphabet = document.getElementsByClassName('only-alpha');
const inputs = document.getElementsByTagName('input');
const firstErr = document.getElementById('first-err');
const secondErr = document.getElementById('second-err');
const companyErr = document.getElementById('company-err');
const emailErr = document.getElementById('email-err');
const jobErr = document.getElementById('job-err');
const phoneErr = document.getElementById('number-err');
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const companyName = document.getElementById('company-name');
const jobTitle = document.getElementById('job-title');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');

Array.from(isAlphabet).forEach(function (element) {
	element.addEventListener('keyup', (event) => {
		const input = event.target.value;
		const target = event.target;
		const targetErr = target.nextElementSibling;
		if (/[^A-Za-z]/.test(input)) {
			targetErr.innerText = 'Can only include alphabet';
			target.classList.remove('invalid', 'valid');
			target.classList.add('invalid');
		} else {
			targetErr.innerText = '';
			target.classList.remove('invalid', 'valid');
			target.classList.add('valid');
		}
	});
});

email.addEventListener('blur', (event) => {
	const input = event.target.value;
	const target = event.target;
	const targetErr = target.nextElementSibling;
	const emailRegex =
		/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!emailRegex.test(input)) {
		targetErr.innerText = 'Must be a valid email';
		target.classList.remove('invalid', 'valid');
		target.classList.add('invalid');
	} else {
		targetErr.innerText = '';
		target.classList.remove('invalid', 'valid');
		target.classList.add('valid');
	}
});

phoneNumber.addEventListener('keyup', (event) => {
	const input = event.target.value;
	const target = event.target;
	const targetErr = target.nextElementSibling;
	if (/[^0-9]/.test(input)) {
		targetErr.innerText = 'Must be a valid phone number';
		target.classList.remove('invalid', 'valid');
		target.classList.add('invalid');
	} else {
		targetErr.innerText = '';
		target.classList.remove('invalid', 'valid');
		target.classList.add('valid');
	}
});

form.addEventListener('submit', (event) => {
	Array.from(inputs).forEach(function (element) {
		if (element.value === '') {
			console.log('in valid');
			event.preventDefault();
		}
	});
});
