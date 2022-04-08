let isReadyToSubmit =false;



// /**giv an error message whene username/password dosent fit */
// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");

//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add(`form__message--${type}`);
// }

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
//     isReadyToSubmit = false;
// }

// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
//     isReadyToSubmit = true;
// }



// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#login");
//     const createAccountForm = document.querySelector("#createAccount");

//     document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.add("form--hidden");
//         createAccountForm.classList.remove("form--hidden");
//     });

//     document.querySelector("#linkLogin").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.remove("form--hidden");
//         createAccountForm.classList.add("form--hidden");
//     });
// /*
//     loginForm.addEventListener("submit", e => {
//         e.preventDefault();
//      /**       כאן צריך להיות בדיקת השם משתמש וסיסמה והעברה לאתר . כרגע בחרתי את שם המשתמש והססמא היחידים שאפשר איתם להכנס *//*
//         if(document.getElementById("user").value == "oryuvalyanirshaul" && document.getElementById("pass").value == "12345678"){
       
//           window.location="http://localhost:3000/"
          
//         }
//         else{
//         setFormMessage(loginForm, "error", "Invalid username/password combination");
//         }

       
//     });

// */


// /*
//     createAccountForm.addEventListener("submit", e => {
//         e.preventDefault();
    
      
//         if(isReadyToSubmit && document.getElementById("signupUsername").value.length > 0 && document.getElementById("emailadress").value.length > 0 && document.getElementById("ps").value.length > 0 && document.getElementById("confirmps").value.length>0){
       
//             loginForm.classList.remove("form--hidden");
//             createAccountForm.classList.add("form--hidden");

//         }

       
//     });
//     */
    
    
    

//     document.querySelectorAll(".form__input").forEach(inputElement => {
//         inputElement.addEventListener("blur", e => {
//             if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 7) {
//                 setInputError(inputElement, "Username must be at least 7 characters in length");
//             }
//             if (e.target.id === "emailadress" &&  !validateEmail(e.target.value) && e.target.value.length > 0) {
//                 setInputError(inputElement, "Invalid Email");
//             }
//             if (e.target.id === "confirmps" &&  e.target.value !== document.getElementById("ps").value) {
//                 setInputError(inputElement, "Please repeat the password correctly");
//             }
//         });

//         inputElement.addEventListener("input", e => {
//             clearInputError(inputElement);
//         });
//     });
// });
