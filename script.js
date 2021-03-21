const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get  the values from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue === '' ) {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be empty');
    } else{
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        
        setErrorFor(email, 'email cannot be empty');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'password cannot be empty');
    } 
    else if (passwordValue.length < 6) {
        setErrorFor(password, 'enter at least 6 characters');
        exit();
    }
     else {
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Confirm password cannot be empty');
    } 
    else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    }
     else {
        setSuccessFor(password2);
        alert("Submitted Successfully");
        window.location = "index.html";
    }


    setSubmitSuccessfor()
}

function setErrorFor(input, message){
    const inputContainer = input.parentElement; //.input-container
    const small = inputContainer.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    inputContainer.className = 'input-container error'
}

function setSuccessFor(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = 'input-container success'
    
}


//The password toggle(show/hide)
let show = false;
function toggle() {
    if(show){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color='grey';
        show = false;
    } 
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#2ecc71';
        show = true;
    }
}

