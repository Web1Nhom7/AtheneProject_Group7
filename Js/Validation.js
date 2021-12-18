function checkVal() {
    var phone = document.getElementById("sodt");

    var phone_error = document.getElementById("phoneError");
    var phone_error1 = document.getElementById("phoneError1");

    var vnRegex = /((09|03|07|08|05)+[0-9]{8}\b)/g;

    if (phone.value !== '') {
        if (vnRegex.test(phone.value) == false) {
            phone.style.border = "2px solid red";
            phone.style.outline = "none";
            phone_error.style.display = 'block';
            phone_error1.style.display = 'none';
            phone.focus();
            return false;

        }
    } else {

        phone.style.border = "2px solid red";
        phone.style.outline = "none";
        phone_error.style.display = 'none';
        phone_error1.style.display = 'block';
        phone.focus();
        return false;

    }

    var pass = document.getElementById("pass");
    var pass_error = document.getElementById("passError");

    if (pass.value.length < 8) {
        pass.style.border = "2px solid red";
        pass.style.outline = "none";
        pass_error.style.display = "block";
        pass.focus();
        return false;
    }


    var repass = document.getElementById("repass");
    var pass_error1 = document.getElementById("passError1");
    if (repass.value !== pass.value) {
        repass.style.border = "2px solid red";
        repass.style.outline = "none";
        pass_error1.style.display = "block";
        return false;
    }

    var cccd = document.getElementById("cccd");
    var cccdError = document.getElementById("cccdError");
    var cccdError1 = document.getElementById("cccdError1");
    var vnRegex1 = /((00)+[0-9]{10}\b)/g;

    if (cccd.value !== '') {
        if (vnRegex1.test(cccd.value) == false) {
            cccd.style.border = "2px solid red";
            cccd.style.outline = "none";
            cccdError.style.display = 'block';
            cccdError1.style.display = 'none';
            return false;

        }
    } else {

        cccd.style.border = "2px solid red";
        cccd.style.outline = "none";
        cccdError.style.display = 'none';
        cccdError1.style.display = 'block';
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
            phone.style.border = "1.7px solid black";
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
        pass.style.border = "1.7px solid black";
        pass_error.style.display = "none";
        return true;
    }
}

function confirmPass() {
    var repass = document.getElementById("repass");
    var pass = document.getElementById("pass");
    var pass_error1 = document.getElementById("passError1");
    if (repass.value === pass.value) {
        repass.style.border = "1.7px solid black";
        pass_error1.style.display = "none";
        return true;
    }
}

function checkCCCD() {
    var cccd = document.getElementById("cccd");
    var cccdError = document.getElementById("cccdError");
    var cccdError1 = document.getElementById("cccdError1");
    var vnRegex1 = /((00)+[0-9]{10}\b)/g;

    if (cccd.value !== '') {
        if (vnRegex1.test(cccd.value) == true) {
            cccd.style.border = "1.7px solid black";
            cccdError.style.display = "none";
            cccdError1.style.display = "none";
            cccd.focus();
            return true;
        }
    }
}