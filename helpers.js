export const startLoader = element => {
    element.innerHTML = `<div class="loading-spinner"></div>`;
}

export const stopLoader = (element, value) => {
    element.textContent = value;
}

// other helpers
const disableFields = (...inputs) => {
    console.log(inputs);// this will be an array
}