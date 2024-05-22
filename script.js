//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("checkbox");
const existingUserBtn = document.getElementById("existing");

const saveUsername=localStorage.getItem('username');
const savePassword=localStorage.getItem('password');

if(savePassword && saveUsername){
	 existingUserBtn.style.display = "block";
}