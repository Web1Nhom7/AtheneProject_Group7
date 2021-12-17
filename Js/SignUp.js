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

    var pass = document.getElementById("pass");
    var repass = document.getElementById("repass");
    var pass_error1 = document.getElementById("passError1");
    if (repass.value != pass.value) {
        repass.style.border = "2px solid red";
        pass_error1.style.display = "block";
        repass.focus();
        return false;
    }

    //Số chứng minh nhân dân phải đủ 12 số
    var cccd = document.getElementById("cccd");
    var cccdError = document.getElementById("cccdError");
    var vnRegex1 = /((00)+[0-9]{12}\b)/g;

    if (cccd.value !== '') {
        if (vnRegex1.test(cccd.value) == false) {
            cccd.style.border = "2px solid red";
            cccdError.style.display = 'block';
            //phone_error1.style.display = 'none';
            cccd.focus();
            return false;

        }
    } else {

        cccd.style.border = "2px solid red";
        cccdError.style.display = 'none';
        //  phone_error1.style.display = 'block';
        cccd.focus();
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

function confirmPass() {
    var repass = document.getElementById("repass");
    var pass = document.getElementById("pass");
    var pass_error1 = document.getElementById("passError1");
    if (repass.value == pass.value) {
        repass.style.border = "2px solid green";
        pass_error1.style.display = "none";
        return true;
    }
}
// Kiểm tra CCCD 
function checkCCCD() {
    var cccd = document.getElementById("cccd");
    var cccdError = document.getElementById("cccdError");
    var vnRegex1 = /(00)+[0-9]{12}\b)/g;

    if (cccd.value !== '') {
        if (vnRegex1.test(cccd.value) == true) {
            cccd.style.border = "2px solid green";
            cccdError.style.display = "none";
            //phone_error1.style.display = "none";
            cccd.focus();
            return true;
        }
    }
}
//Kiểm tra ngày cấp


// function validateForm() {
//     var fname = document.getElementById("fname").value;
//     var sname = document.getElementById("sname").value;
//     var phone = document.getElementById("phone").value;
//     var password = document.getElementById("password").value;
//     var repassword = document.getElementById("repassword").value;
//     var day = document.getElementById("day").value;
//     var month = document.getElementById("month").value;
//     var year = document.getElementById("year").value;
//     var gender = document.getElementById("gender").value;
//     var sonha = document.getElementById("sonha").value;
//     var duong = document.getElementById("duong").value;
//     var phuong = document.getElementById("phuong").value;
//     var quan = document.getElementById("quan").value;
//     var tp = document.getElementById("tp").value;
//     var cccd = document.getElementById("cccd").value;
//     var ngaycap = document.getElementById("ngaycap").value;

//     if (fname == null || fname == "") {
//         alert("Vui lòng nhập tên lót");
//         return false;
//     } else if (sname == null || sname == "") {
//         alert("Vui lòng nhập tên");
//         return false;
//     } else if (phone == null || phone == "") {
//         alert("Vui lòng nhập số điện thoại");
//         return false;
//     } else if (password == null || password == "") {
//         alert("Vui lòng nhập password");
//         return false;
//     } else if (repassword == null || repassword == "") {
//         alert("Vui lòng nhập lại password");
//         return false;
//     } else if (day == null || day == "") {
//         alert("Vui lòng nhập ngày");
//         return false;
//     } else if (month == null || month == "") {
//         alert("Vui lòng nhập tháng");
//         return false;
//     } else if (year == null || year == "") {
//         alert("Vui lòng nhập năm");
//         return false;
//     } else if (gender == null || gender == "") {
//         alert("Last name must be filled out");
//         return false;
//     } else if (sonha == null || sonha == "") {
//         alert("Last name must be filled out");
//         return false;
//     } else if (phuong == null || phuong == "") {
//         alert("Vui lòng nhập tên phường");
//         return false;
//     } else if (duong == null || duong == "") {
//         alert("Vui lòng nhập tên đường");
//         return false;
//     } else if (quan == null || quan == "") {
//         alert("Vui lòng nhập tên quận");
//         return false;
//     } else if (tp == null || tp == "") {
//         alert("Vui lòng nhập tên thành phố ");
//         return false;
//     } else if (cccd == null || cccd == "") {
//         alert("Vui lòng nhập số CCCD");
//         return false;
//     } else if (ngaycap == null || ngayCap == "") {
//         alert("Vui lòng nhập ngày cấp");
//         return false;
//     }

//     alert("Bạn đã đăng kí thành công")

// }

// function formValidate() {
//     var regExp = /^(0[234][0-9]{8}|1[89]00[0-9]{4})$/;
//     var phone = document.getElementById("phone").value;
//     if (regExp.test(phone))
//         alert('SĐT hợp lệ!');
//     else
//         alert('SĐT không hợp lệ!');
// }