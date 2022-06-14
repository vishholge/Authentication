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
			homenavlink.classList.add("active");
			homePage.style.display = 'block';
      
			break
		case 'SIGNUP':
     
			signupnavlink.classList.add("active");
			signupPage.style.display = 'block';
      console.log("Hello world");
			break
		case 'LOGIN':
			loginnavlink.classList.add("active");
			loginPage.style.display = 'block';
			break
    }

}
// Authetication code:-
let signupPassword = document.getElementById("sign-up-password");

let loginPassword = document.getElementById("log-in-password");
let loginId = document.getElementById("log-in-id");

const lookup = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M',
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
  'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
  'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
  'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
  'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
  'y': 'l', 'z': 'm',
  '0': '5', '1': '6', '2': '7', '3': '8',
  '4': '9', '5': '0', '6': '1', '7': '2',
  '8': '3', '9': '4',
  '!': '#', '$': '%', '&': '+', '-': '@',
  '_': '~', '#': '!', '%': '$', '+': '&',
  '@': '-', '~': '_'
}

// encoding signup password;
const encode = (inputStr) => {
   let codeArr = inputStr.split("");
   const lookupKeys = Object.keys(lookup);
   const lookUpValues = Object.values(lookup);
   let encodeArr = codeArr.map(codeChar =>{
       let index = lookUpValues.indexOf(codeChar);
       return lookupKeys[index];
   })
    return encodeArr.join("");
}
// decoding login password.
const decode = (encodeStr) => {
    const codeArr = encodeStr.split("");
    let decodeArr = codeArr.map(codeChar => lookup[codeChar]);
    //console.log(decodeArr);
    return decodeArr.join("");
}
let validAlert = document.getElementById("valid-alert");

const signUp = () => {
    
    let isValid =  isValidate()
    if(isValid === false){
         return;
    }
    let inputPassword = signupPassword.value; 
    // console.log(inputPassword);
    state.password = encode(inputPassword);
    validAlert.innerText = 'Password successfully changed!'
	validAlert.style.display = 'block'
	setTimeout(() => {
		validAlert.style.display = 'none'
	}, 3000)

}
let loginValid = document.getElementById("loginValid");
let longinValid = document.getElementById("loginInvalid");
const logIn = () => {
  console.log("hello word");
    let inputPassword = loginPassword.value
  if(inputPassword === decode(state.password)){
    loginValid.style.display = 'block'
    loginInvalid.style.display = 'none'
  } else {
    loginInvalid.style.display = 'block'
    loginValid.style.display = 'none'
  }
}


// for cofirming password



const confirmPass = () => {
  let confirmPassword = document.getElementById("confirm-password");
  let selectitag = document.getElementById("confirm-pass");
  let confirmPass = confirmPassword.value;
  let inputPass = signupPassword.value;
  if(inputPass === confirmPass){
    selectitag.style.backgroundColor ="green";
    selectitag.style.display = "block";
    

  }
  else{
    selectitag.style.backgroundColor = "red";
    selectitag.style.display = "block";
    
  }

}

