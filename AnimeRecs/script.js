const form = document.getElementById('form');
const username = document.getElementById('username');
const size = document.getElementById('shsize')
const title = document.getElementById('title');
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const userValue = username.value.trim();
	const sizeValue = size.value;
	const titleValue = title.value.trim();
	var c1 = document.getElementsByName('c1')
	var sol = document.getElementsByName('c1')
	var solchoice
	var c1choice;
	var result = false;
	var c1result = false;
	var userresult = false;
	var tresult = false;
	
	if(userValue === '') {
		setErrorFor(username, 'Username cannot be blank, let me give you credit!');
		userresult = false;
	} else {
		setSuccessFor(username);
		userresult = true;
	}

	if(userValue === '') {
		setErrorFor(title, 'I need the name of the series!');
		tresult = false;
	} else {
		setSuccessFor(title);
		tresult = true;
	}
	
	if(sizeValue === 'select') {
		setErrorFor(size, 'Please let me know how long it is!');
		sizeresult = false;

	} else {
		setSuccessFor(size);
		sizeresult = true;

	}

	for(var i = 0; i < c1.length; i++) {
		if(c1[i].checked)
			c1choice = c1[i].value;
	}

	for(var i = 0; i < sol.length; i++) {
		if(sol[i].checked)
			solchoice = sol[i].value;
	}

	if(solchoice === undefined){
		result = false;

	}else{
		result = true;
		
	}
	
	if(c1choice === undefined){
		c1result = false;

	}else{
		c1result = true;
		
	}

	if(result === true && sizeresult === true && userresult === true){
		if(c1choice === 'Kodomo' || sizeValue === 'exx' || sizeValue === 'giga' || solchoice === 'Mecha' ||  solchoice === 'Isekai' || solchoice === 'Thriller'){
			window.location.href = "deny.html";	
		}
		if(c1choice != 'Kodomo' ||sizeValue != 'exx' && sizeValue != 'giga' && solchoice != 'Mecha' &&  solchoice != 'Isekai' && solchoice != 'Thriller'){
			window.location.href = "accept.html";
		}
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	