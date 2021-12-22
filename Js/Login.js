function Login(sodt, pass) {
    sodt = document.getElementById("sodt").value;
    pass = document.getElementById("pass").value;

    var user = new Object();
    user.phone = sodt;
    user.password = pass;
    var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));

    if (typeof(Storage) !== undefined) {
        for (var i = 0; i < listCustomer.length; i++) {
            if (user.phone == listCustomer[i].phone && user.password == listCustomer[i].password) {
                // window.location.href = "./AtheneMain_HTML/HomePage.html";

                window.location.href = "./Form_HTML/ProfileFindStudent.html";

                sessionStorage.setItem("userLogin", JSON.stringify(user));
                // sessionStorage.setItem("usename", user.phone);
                // sessionStorage.setItem("password", user.password);
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