let weakPass = document.getElementById("weak-pass");
    let meadiumPass = document.getElementById("meadium-pass");
    let strongPass = document.getElementById("strong-pass");

const checkPass = () => {
    
    let passLength = document.getElementById("sign-up-password").value;
    if(passLength.length <5){
        strongPass.style.display = "none";
        meadiumPass.style.display = "none";
        weakPass.style.color = "red"
        weakPass.style.display = "block";
    }
    else if( passLength >=5 && passLength <8 ){
        strongPass.style.display = "none";
        meadiumPass.style.color = "yellow"
        meadiumPass.style.display = "block";
        weakPass.style.display = "none";
    }
    else{
        strongPass.style.color = "green";
        strongPass.style.display = "block";
        meadiumPass.style.display = "none";
        weakPass.style.display = "none";
    }

}