let username=document.getElementById("email");
let error=document.getElementById("errorp");
let pass=document.getElementById("pwd");

function logtrue()
{    
    if(username.value.trim==""||pass.value.trim=="")
    {
        alert("Fields cannot be empty");
        return false;    
    }
    else if(username.value=="admin"&&pass.value=="12345")
    {
        alert("Succesfull Authentication");
        return true;      
    }
    else
    {
        //alert("Invalid Credentials");
        error.innerHTML="Invalid username or password";
        error.style.color="red";
        return false;     
    }
  
}
