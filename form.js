// let username=document.getElementById("email");
// let errorp=document.getElementById("errorp");
// let pass=document.getElementById("pwd");

// var a;
// function logtrue(username,pass,callback)
// {    
//     if(username.value.trim==""||pass.value.trim=="")
//     {
//         alert("Fields cannot be empty");
//         // return false; 
//         // a=0;    

//     }
//     // else if(username.value=="admin"&&pass.value=="12345")
//     // {
//     //    // alert("Succesfull Authentication");
//     //     // return true;      
//     //     a=1; 
//     // }
//     else
//     {
//         //alert("Invalid Credentials");
//        // return false;  
//     //    a=0;   
//         callback() ;
//     }  
//     // callback() ;
// }
// function val(){
//     if(username.value=="admin"&&pass.value=="12345")
//      {   alert("Succesfull Authentication");
//         // error.innerHTML="Valid";
//        //  error.style.color="green";
//         return true;
//     }
//     else{
//          errorp.innerHTML="Invalid";
//           errorp.style.color="red";
//         return false;
//     }
// }
// logtrue(username,pass,val);
// let a=0;
let username=document.getElementById("email");
let error=document.getElementById("errorp");
let pass=document.getElementById("pwd");
function val(){
  //  alert("Succesfull Authentication");
    return true;
}

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
    //     return true;     
           callback() ;
    }
    else
    {
        //alert("Invalid Credentials");
        error.innerHTML="Invalid username or password";
        error.style.color="red";
        return false;     
    }
  
}




