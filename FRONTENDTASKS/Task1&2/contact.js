function clearErrors(){             //clearing the errors on refreshing

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = " ";
    }


}
function setError(id, error){
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var c=0;            //making a counter
    var returnval = true;    //initialising it to true
    clearErrors();              
    

    //performing validation and if validation fails, setting the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        setError("name", "*Length of name is too short");
        returnval = false;
    }

    else if (name.length == 0){
        setError("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    else{
        c=c+1;
        }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
        setError("email", "*Email length is too long");
        returnval = false;
    }
    else{
        c=c+1;
         
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        setError("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    else{
        c=c+1;
         
    }
    if(c==3){
        alert("Thanks for the Feedback!");
      }
      return returnval;  
      

}
