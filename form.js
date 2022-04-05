const form = document.getElementById('card-form');
const isAlphabet = document.getElementsByClassName('only-alpha');
const inputs = document.getElementsByTagName('input');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
// click 이벤트 바인딩 한다.
// 온리알파 / 구별해서 에러메시지 수정

// form.addEventListener('click', (event) => {
// 	let errMsg;
// 	const target = event.target;
// 	if (target && target.classList.contains('only-alpha')) {
// 		errMsg = 'Must be a valid email';
// 	}
// 	if (target.classList.contains('button')) {
// 		errMsg = 'Must be a valid email';
// 	}
// });

form.addEventListener('keyup', (event) => {
	let errMsg;
	let regex;
	const target = event.target;
	const input = event.target.value;
	const targetErr = target.nextElementSibling;

	if (target.classList.contains('only-alpha')) {
		errMsg = 'Can only include alphabet';
		regex = /[A-Za-z]/;
	}

	if (target.id === 'phone-number') {
		console.log(target.id);
		errMsg = 'Can only include number';
		regex = /[0-9]/;
	}

	if (!regex.test(input)) {
		targetErr.innerText = errMsg;
		target.classList.remove('invalid', 'valid');
		target.classList.add('invalid');
	} else {
		targetErr.innerText = '';
		target.classList.remove('invalid', 'valid');
		target.classList.add('valid');
	}
});

form.addEventListener('blur', (event) => {
	let errMsg;
	let regex;
	const target = event.target;
	const targetErr = target.nextElementSibling;
	const input = event.target.value;

	if (event.target.classList.contains('only-alpha')) {
		errMsg = 'Must be a valid email';
	}
	regex =
		/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	label.classList.add('on');
	if (!emailRegex.test(input)) {
		targetErr.innerText = errMsg;
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
			event.preventDefault();
		}
	});
});
