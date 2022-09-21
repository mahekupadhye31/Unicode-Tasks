function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = " ";
    }


}
function seterror(id, error){
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var c=0;
    var returnval = true;
    clearErrors(); 
    

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    else if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    else{
        c=c+1;
        }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    else{
        c=c+1;
         
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    else{
        c=c+1;
         
    }


    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

       
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    else{
        c=c+1;
         
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    else{
        c=c+1;
         
    }

    if(c==5){
        alert("form submittted succesfully!");
      }
      return returnval;  
      

}
