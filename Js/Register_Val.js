function checkPhoneVal() {
    var phone = document.getElementById("sodt");
    var phone_error = document.getElementById("phoneError");
    var phone_error1 = document.getElementById("phoneError1");
    var pass = document.getElementById("pass");

    var vnRegex = /((09|03|07|08|05)+[0-9]{8}\b)/g;

    if (phone.value !== '') {
        if (vnRegex.test(phone.value) == false) {
            phone.style.border = "2px solid red";
            phone.style.outline = "none";
            phone_error.style.display = 'block';
            phone_error1.style.display = 'none';
            return false;

        } else {
            phone.style.border = "1.7px solid black";
            phone_error.style.display = "none";
            phone_error1.style.display = 'none';
            pass.focus();
            return true;
        }
    }
}

function checkPassVal() {
    var pass = document.getElementById("pass");
    var pass_error = document.getElementById("passError");

    if (pass.value.length < 8) {
        pass.style.border = "2px solid red";
        pass.style.outline = "none";
        pass_error.style.display = "block"
        return false;
    } else if (pass.value.length >= 8) {
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
    } else if (repass.value !== pass.value) {
        repass.style.border = "2px solid red";
        repass.style.outline = "none";
        pass_error1.style.display = "block";
        return false;
    }
}

function checkCCCD() {
    var cccd = document.getElementById("cccd");
    var cccdError = document.getElementById("cccdError");
    var cccdError1 = document.getElementById("cccdError1");
    var vnRegex1 = /((00|01|02|03|04|05|06|07|08|09)+[0-9]{10}\b)/g;

    if (cccd.value !== '') {
        if (vnRegex1.test(cccd.value) == true) {
            cccd.style.border = "1.7px solid black";
            cccdError.style.display = "none";
            cccdError1.style.display = 'none';
            return true;
        } else {
            cccd.style.border = "2px solid red";
            cccd.style.outline = "none";
            cccdError.style.display = 'block';
            cccdError1.style.display = 'none';
            return false;
        }
    }

}

function submitFormLearner() {

    var ho = document.getElementById("ho").value;
    var ten = document.getElementById("ten").value;
    var sodt = document.getElementById("sodt").value;
    var pass = document.getElementById("pass").value;
    var dob = document.getElementById("dob").value;
    var sonha = document.getElementById("sonha").value;
    var duong = document.getElementById("duong").value;
    var phuong = document.getElementById("phuong").value;
    var quan = document.getElementById("quan").value;
    var cccd = document.getElementById("cccd").value;
    var date = document.getElementById("ngaycap").value;
    var nam = document.getElementById("nam").checked.toString();
    var nu = document.getElementById("nu").checked.toString();

    var user = new Object();
    user.name = ho + ' ' + ten;
    user.phone = sodt;
    user.password = pass;
    user.birthday = dob;

    if (nam == 'true') {
        user.gender = "Nam";
    }
    if (nu == 'true') {
        user.gender = "Nữ";
    }
    if (nam == 'false' && nu == 'false') {
        user.gender = " ";
    }

    user.address = sonha + ";" + duong + ";" + phuong + ";" + quan + ";" + "TP.HCM";
    user.CCCD = cccd;
    user.ngayCapCCCD = date;

    if (user.name == "" || user.phone == "" || user.password == "" || user.birthday == "" || user.gender == " " || user.address == "" || user.CCCD == "" || user.ngayCapCCCD == "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        var phone_error1 = document.getElementById("phoneError1");
        phone_error1.style.display = 'block';
        var cccdError1 = document.getElementById("cccdError1");
        cccdError1.style.display = 'block';
        return false;
    } else {
        if (kiemTraSDT(user.phone) == true && kiemTraCCCD(user.CCCD) == true && kiemTraPass(user.password) == true) {
            user.id = createIDCustomer();

            var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));
            if (listCustomer == null) {
                listCustomer = new Array();
            }

            if (checkCustomerExist(listCustomer, sodt) == false) {
                listCustomer.push(user);

                localStorage.setItem('listCustomer', JSON.stringify(listCustomer));

                alert("Đăng ký thành công!" + "\n" + "Hãy đăng nhập vào website.");
                window.location.href = "../AtheneMain_HTML/HomePage.html";
                return true;
            } else {
                alert("Khách hàng đã tồn tại!");
                return false;
            }
        } else { return alert("Số điện thoại hoặc mật khẩu hoặc CCCD không đúng định dạng!"); }

    }

}





function submitFormTutor() {

    var ho = document.getElementById("ho").value;
    var ten = document.getElementById("ten").value;
    var sodt = document.getElementById("sodt").value;
    var pass = document.getElementById("pass").value;
    var dob = document.getElementById("dob").value;
    var sonha = document.getElementById("sonha").value;
    var duong = document.getElementById("duong").value;
    var phuong = document.getElementById("phuong").value;
    var quan = document.getElementById("quan").value;
    var cccd = document.getElementById("cccd").value;
    var date = document.getElementById("ngaycap").value;
    var nam = document.getElementById("nam").checked.toString();
    var nu = document.getElementById("nu").checked.toString();

    var svt = document.getElementById("svt").value;
    var majors = document.getElementById("chuyennganh").value;
    var exp = document.getElementById("exp").value;
    var degree = document.getElementById("degree").value;

    var user = new Object();
    user.name = ho + ' ' + ten;
    user.phone = sodt;
    user.password = pass;
    user.birthday = dob;

    if (nam == 'true') {
        user.gender = "Nam";
    }
    if (nu == 'true') {
        user.gender = "Nữ";
    }
    if (nam == 'false' && nu == 'false') {
        user.gender = " ";
    }

    user.address = sonha + ";" + duong + ";" + phuong + ";" + quan + ";" + "TP.HCM";
    user.CCCD = cccd;
    user.ngayCapCCCD = date;
    user.trinhDo = svt;
    user.majors = majors;
    user.exp = exp;
    user.degree = degree;

    if (user.name == "" || user.phone == "" || user.password == "" || user.birthday == "" || user.gender == " " || user.address == "" || user.CCCD == "" || user.ngayCapCCCD == "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        var phone_error1 = document.getElementById("phoneError1");
        phone_error1.style.display = 'block';
        var cccdError1 = document.getElementById("cccdError1");
        cccdError1.style.display = 'block';
        return false;
    } else {
        if (kiemTraSDT(user.phone) == true && kiemTraCCCD(user.CCCD) == true && kiemTraPass(user.password) == true) {
            user.id = createIDCustomer();

            var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));
            if (listCustomer == null) {
                listCustomer = new Array();
            }

            if (checkCustomerExist(listCustomer, sodt) == false) {
                listCustomer.push(user);

                localStorage.setItem('listCustomer', JSON.stringify(listCustomer));


                alert("Đăng ký thành công!" + "\n" + "Hãy đăng nhập vào website.");
                window.location.href = "../AtheneMain_HTML/HomePage.html";
                return true;
            } else {
                alert("Khách hàng đã tồn tại!");
                return false;
            }
        } else { return alert("Số điện thoại hoặc mật khẩu hoặc CCCD không đúng định dạng!"); }

    }

}



function checkCustomerExist(listCustomer, sodt) {
    var kq = false;
    for (var i = 0; i < listCustomer.length; i++) {
        if (sodt == listCustomer[i].phone) {
            kq = true;
            break;
        }
    }
    return kq;
}

function createIDCustomer() {
    var id = new Date();
    id = id.getTime();
    id = Math.random().toString().substring(2, 4) + '_' + id.toString();
    return id;
}

function kiemTraSDT(sdt) {
    var kq = false;
    var vnRegex = /((09|03|07|08|05)+[0-9]{8}\b)/g;
    sdt = document.getElementById("sodt").value;
    if (sdt.length == 10 && vnRegex.test(sdt) == true) {
        kq = true;
    }
    return kq;
}

function kiemTraPass(matKhau) {
    var kq = false;
    matKhau = document.getElementById("pass").value;
    if (matKhau.length >= 8) {
        kq = true;
    }
    return kq;
}

function kiemTraCCCD(cccd) {
    var kq = false;
    var vnRegex1 = /((00|01|02|03|04|05|06|07|08|09)+[0-9]{10}\b)/g;
    cccd = document.getElementById("cccd").value;
    if (cccd.length == 12 && vnRegex1.test(cccd) == true) {
        kq = true;
    }
    return kq;
}