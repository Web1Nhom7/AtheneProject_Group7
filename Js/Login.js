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
    } else {
        pass.style.border = "2px solid white";
    }

}


function Login(sodt, pass) {
    sodt = document.getElementById("sodt").value;
    pass = document.getElementById("pass").value;

    var user = new Object();
    user.phone = sodt;
    user.password = pass;

    var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));

    if (sodt == "" || pass == "") {
        return alert("Vui lòng nhập số điện thoại và mật khẩu");
    } else {

        if (typeof(Storage) !== undefined) {
            for (var i = 0; i < listCustomer.length; i++) {
                if (user.phone == listCustomer[i].phone && user.password == listCustomer[i].password) {
                    window.location.href = "../AtheneMain_HTML/HomePage.html";

                    sessionStorage.setItem("userLogin", JSON.stringify(user));

                    sessionLogin(sodt, pass);
                    alert("Đăng nhập thành công!");
                    return true;

                } else {
                    alert("Tên hoặc mật khẩu chưa đúng. Vui lòng nhập lại!");
                    document.getElementById("sodt").value = "";
                    document.getElementById("pass").value = "";
                    return false;
                }
            }
        } else { alert("Bạn chưa có tài khoản!"); }
    }
}

function sessionLogin(sodt, pass) {
    sodt = document.getElementById("sodt").value;
    pass = document.getElementById("pass").value;

    var user = new Object();
    user.phone = sodt;
    user.password = pass;

    var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));
    for (var i = 0; i < listCustomer.length; i++) {
        if (user.phone == listCustomer[i].phone && user.password == listCustomer[i].password) {
            user.name = listCustomer[i].name;
            user.phone = listCustomer[i].phone;
            user.password = listCustomer[i].password;
            user.birthday = listCustomer[i].birthday;
            user.gender = listCustomer[i].gender;
            user.address = listCustomer[i].address;
            user.CCCD = listCustomer[i].CCCD;
            user.ngayCapCCCD = listCustomer[i].ngayCapCCCD;
            user.id = listCustomer[i].id;
            break;
        }
    }
    localStorage.setItem('sessionLogin', JSON.stringify(user));
}