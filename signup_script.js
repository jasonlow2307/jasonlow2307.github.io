function validateLogin(){
    let userName = document.forms["signup_form"]["user_name"].value;
    let password = document.forms["signup_form"]["password"].value;
    let re_password = document.forms["signup_form"]["re_password"].value;
    const welcome_banner = document.getElementById('welcome_banner');
    const signup_form = document.getElementById('signup_form');

    if (userName == "") {
        alert("Please fill in your user name");
        return false;
    }
    
    if (password == "") {
        alert("Please fill in your password")
        return false;
    }

    if(re_password == "") {
        alert("Please repeat your password");
        return false;
    } else if(re_password.localeCompare(password) != 0){
        alert("Please enter the same password for the repeating password");
        return false;
    } else {
        alert("Welcome, you have signed up succesfully");
        welcome_banner.textContent = 'Welcome ' + userName + ', you have signed up successfully';
        welcome_banner.style.marginBottom = 150;
        signup_form.style.display = 'none';
        return false;
    }
}