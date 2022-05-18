let state = {
	currentNavLinkSelected: 'home',
	firstName: '',
	lastName: '',
	email: '',
    phone :'',
	password: '',
    confirm_password :'',
	
	agreedToTnC: false,
}

//selecting container of homepage , signup and login page
let homePage= document.getElementById("home-page");
let signupPage= document.getElementById("sign-up-page");
let loginPage= document.getElementById("log-in-page");
//selecting nav item 
let homenavlink = document.getElementById("homenavlink");
let signupnavlink = document.getElementById("signupnavlink");
let loginnavlink = document.getElementById("loginnavlink");

// mannupulatin nav item display porperty;
function status(activebar){
    homePage.style.display = "none";
    signupPage.style.display= "none";
    loginPage.style.display = "none";
    homenavlink.classList.remove("active");
    signupnavlink.classList.remove("active");
    loginnavlink.classList.remove("active");
     
    switch(activebar){
		case 'HOME':
			homenavlink.classList.add("active")
			homePage.style.display = 'block'
			break
		case 'SIGNUP':
			signupnavlink.classList.add("active")
			signupPage.style.display = 'block'
			break
		case 'LOGIN':
			loginnavlink.classList.add("active")
			loginPage.style.display = 'block'
			break
    }

}
let signuppassword = document.getElementById("sign-up-password");

let loginPassword = document.getElementById("log-in-password");
let loginId = document.getElementById("log-in-id");

const encode = (inputStr) => {
   let codeArr = inputStr.split("");
   const lookupKeys = Object.keys(lookup);
   const lookUpValues = Object.values(lookup);
   let encodeArr = codeArr.map(codeChar =>{
       let index = lookUpValues.find(element => element === codeChar);
       return lookupKeys[index];
   })
   encodeArr.join("");
}
const decode = (encodeStr) => {
    const codeArr = endcodeStr.split("");
    let decodeArr = codeArr.map(codeChar => loolup[codeChar]);
    return decodeArr.join("");
}

const signUp = () => {
    let inputpassword = signuppassword.value; 
    state.password = encode(inputpassword);
    validAlert.innerText = 'Password successfully changed!'
	validAlert.style.display = 'block'
	setTimeout(() => {
		validAlert.style.display = 'none'
	}, 3000)

}
const logIn = () => {
    let inputPassword = loginPassword.value
  if(inputPassword === decode(state.password)){
    loginValid.style.display = 'block'
    loginInvalid.style.display = 'none'
  } else {
    loginInvalid.style.display = 'block'
    loginValid.style.display = 'none'
  }
}
