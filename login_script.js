function validateLogin(){
    let userName = document.forms["login_form"]["user_name"].value;
    let password = document.forms["login_form"]["password"].value;
    let re_password = document.forms["login_form"]["re_password"].value;
    const welcome_banner = document.getElementById('welcome_banner');
    const login_form = document.getElementById('login_form');

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
    } 

    if(userName === "admin" && password === "admin" && re_password === "admin") {
        alert("Welcome, you have logged in succesfully");
        welcome_banner.textContent = 'Welcome Admin, you have logged in successfully';
        welcome_banner.style.marginBottom = 150;
        login_form.style.display = 'none';
        return false;
    }
}