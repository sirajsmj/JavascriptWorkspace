const form=document.getElementById("form");
//const formControl=document.getElementsByClassName("form-control");
const usernameTextBox=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

function showError(input,message){
const divFormControl=input.parentElement;
divFormControl.className="form-control error";
const small=divFormControl.querySelector("small");
small.innerHTML=message
}
function showSucess(input){
    const divFormControl=input.parentElement;
    divFormControl.className="form-control success"
    }
    function checkemail(input){
      const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSucess (input);
    }else{
        showError(input,"email is not valid")
    }
    }
    function checkpasswordmatch(password,password2){
        if (password.value!==password2.value){
        showError(password2," Password do not match");
        }
        else{
            showSucess;
        }
        }

function checkLength(input,min,max){
if (input.value.length<min){
showError(input,`${getFieldName(input)} must be atleast ${min}characters`)
}
else if(input.value.length>max){
    showError(input,`${getFieldName(input)} must maximum ${max}characters`)
    }
    else {
        showSucess(input);
    }

}

    function checkRequired (textBoxArray){
textBoxArray.forEach(function (Element){
    if(Element.value.trim()===""){
showError(Element,`${getFieldName(Element)} is required`)
    }
    
else {
showSucess(Element)
}
    })
}

    function getFieldName(Element){
return Element.id.charAt(0).toUpperCase()+Element.id.slice(1).toLowerCase()
    }


form.addEventListener("submit",function(e){
    e.preventDefault();
    
    checkRequired([usernameTextBox,email,password,password2]);
    checkLength(username,6,15);
    checkLength(password,8,20);
    checkemail(email);
    checkpasswordmatch(password ,password2);

    
    /*if(usernameTextBox.value === ''){
showError(usernameTextBox,"user name is required")
}
else{
showSucess(usernameTextBox)
}
if(email.value === ''){
    showError(email,"email is required")
    
    }else if(!isvalidemail(email.value)){
        showError(email,"email is not valid")
    }
    else{
    showSucess(email)
    }
    if(password.value === ''){
        showError(password,"password is required")
        
        }
        else{
        showSucess(password)
        }
        if(password2.value === ''){
            showError(password2,"password is required")
            
            }
            else{
            showSucess(password2)
            }
            */
}
)
