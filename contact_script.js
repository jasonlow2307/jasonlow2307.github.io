function containsNumbers(str) {
    return /[0-9]/.test(str);
  }

function validateForm(){
    let name = document.forms["contact_form"]["name"].value;
    let email = document.forms["contact_form"]["email"].value;
    let age = document.forms["contact_form"]["age"].value;
    let gender = document.forms["contact_form"]["gender"].value;

    if (name == ""){
        alert("Name must be filled in");
        return false;
    }

    if (containsNumbers(name) == true) {
        alert("Name cannot contain number(s)");
        return false
    }

    if (email ==""){
        alert("Email must be filled in"); 
        return false;  
    }

    if (age == ""){
        alert("Age must be filled in");
        return false;
    } else if (age<0 || age>200) {
        alert("Please enter a valid age");
        return false;
    } else{
        alert("Form submitted successfully")
        return true;
    }
}