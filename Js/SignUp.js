function checkVal() {
    var phone = document.getElementById("sodt");

    var phone_error = document.getElementById("phoneError");
    var phone_error1 = document.getElementById("phoneError1");

    var vnRegex = /((09|03|07|08|05)+[0-9]{8}\b)/g;

    if (phone.value !== '') {
        if (vnRegex.test(phone.value) == false) {
            phone.style.border = "2px solid red";
            phone_error.style.display = 'block';
            phone_error1.style.display = 'none';
            phone.focus();
            return false;

        }
    } else {

        phone.style.border = "2px solid red";
        phone_error.style.display = 'none';
        phone_error1.style.display = 'block';
        phone.focus();
        return false;

    }

    var pass = document.getElementById("pass");
    var pass_error = document.getElementById("passError");

    if (pass.value.length < 8) {
        pass.style.border = "2px solid red";
        pass_error.style.display = "block";
        pass.focus();
        return false;
    }

}

function checkPhoneVal() {
    var phone = document.getElementById("sodt");
    var phone_error = document.getElementById("phoneError");
    var phone_error1 = document.getElementById("phoneError1");
    var pass = document.getElementById("pass");

    var vnRegex = /((09|03|07|08|05)+[0-9]{8}\b)/g;

    if (phone.value !== '') {
        if (vnRegex.test(phone.value) == true) {
            phone.style.border = "2px solid green";
            phone_error.style.display = "none";
            phone_error1.style.display = "none";
            pass.focus();
            return true;
        }
    }
}

function checkPassVal() {
    var pass = document.getElementById("pass");
    var pass_error = document.getElementById("passError");

    if (pass.value.length >= 8) {
        pass.style.border = "2px solid green";
        pass_error.style.display = "none";
        return true;
    }
}