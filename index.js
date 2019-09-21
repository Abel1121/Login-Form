import {Backend} from "./backend.js";
import {startLoader, stopLoader} from "./helpers.js";
const API = new Backend();
const form = document.querySelector("#login-form");
const message = document.querySelector("#login-error");
const button = document.querySelector("#login-button");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
    form.addEventListener("submit", event => {
        event.preventDefault();
        startLoader(button);
        loginEmail.disabled = true;
    loginPassword.disabled = true;
            API.setBaseUrl("https://api.learnjavascript.online/build/")
            API.post("login", {
                email: loginEmail.value,
                password: loginPassword.value
            }).then(data => {
                loginEmail.disabled = false;
            loginPassword.disabled = false;
            stopLoader(button, "Login");
            console.log(data); 
            if (data.error) {
                message.innerHTML = data.message
            }else{
                form.innerHTML = "You are logged in!."
            }
        });
    });