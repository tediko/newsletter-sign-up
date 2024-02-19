const emailInput = document.querySelector('[data-input]');
const submitButton = document.querySelector('[data-button]');
const errorSpan = document.querySelector('[data-error]');
const formElement = document.querySelector('[data-form]');
const messageModal = document.querySelector('[data-message-modal]');
const messageSpan = document.querySelector('[data-message-span]');
const messageCloseButton = document.querySelector('[data-message-button]');
const overlayElement = document.querySelector('[data-overlay]');
const bodyElement = document.querySelector('[data-body]');
const activeClass = 'active';

// CHECK IF EMAIL IS VALID
const isEmailValid = (email) => {
    const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return email.match(regexp);
}

// FORM VALIDATION
const formValidation = (event) => {
    event.preventDefault();
    const inputValue = emailInput.value;

    if (isEmailValid(inputValue)) {
        showMessageModal(inputValue);
        emailInput.value = '';
        emailInput.setAttribute('aria-invalid', 'false');
    } else {
        errorSpan.classList.add(activeClass);
        emailInput.classList.add(activeClass);
        emailInput.setAttribute('aria-invalid', 'true');
    };
    
};

// INPUT VALIDATION
const inputValidation = () => {
    const inputValue = emailInput.value;
    
    if (isEmailValid(inputValue)) {
        errorSpan.classList.remove(activeClass);
        emailInput.classList.remove(activeClass);
        emailInput.setAttribute('aria-invalid', 'false');
    }
}

// SHOW MESSAGE MODAL ON PAGE
const showMessageModal = (email) => {
    overlayElement.classList.add(activeClass);
    messageModal.classList.add(activeClass);
    bodyElement.classList.add(activeClass);
    messageSpan.textContent = email;
    messageCloseButton.focus();
    
    messageCloseButton.addEventListener('click', () => {
        overlayElement.classList.remove(activeClass);
        messageModal.classList.remove(activeClass);
        bodyElement.classList.remove(activeClass);
    })
}

// EVENT LISTENERS
formElement.addEventListener('submit', (event) => formValidation(event));
emailInput.addEventListener('input', inputValidation);