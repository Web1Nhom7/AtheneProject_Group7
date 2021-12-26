function kiemTraLogin() {

    if (typeof(Storage) !== undefined) {
        userlogin = sessionStorage.getItem('userLogin');
        if (userlogin === null) {
            window.location.href = "../AtheneMain_HTML/HomePage.html";
            return alert("Vui lòng đăng nhập trước khi thực hiện đăng ký!")
        }
    }
}