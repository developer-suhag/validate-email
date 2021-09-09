const emailValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


const emailField = document.getElementById('email-field');
const validationMessage = document.getElementById('validation-message');


const showMessage = (message, color) => {
    validationMessage.style.color = `${color}`
    validationMessage.innerText = `${message}`;
}


document.getElementById('check-btn').addEventListener('click', () => {
    const email = emailField.value;
    if (email) {
        checkEmail(email);
    } else {
        showMessage('Please type your email address', 'text-warning')
    }
    emailField.value = '';
});

const checkEmail = email => {
    const result = emailValidation.test(`${email}`);

    // show message 
    if (result) {
        showMessage(`✔️ ${email} :- the email address is valid`, '	#32CD32')
    } else {
        showMessage('❌ Oops, the email address is not valid', '#eb3b5a')
    }
}