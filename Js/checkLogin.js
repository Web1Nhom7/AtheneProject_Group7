function kiemTraLogin() {

    if (typeof(Storage) !== undefined) {
        userlogin = sessionStorage.getItem('userLogin');
        if (userlogin === null) {
            // window.location.href = "../AtheneMain_HTML/HomePage.html";

            window.location.href = "./index.html";
            return alert("Vui lòng đăng nhập trước khi thực hiện đăng ký!")
        }
    }
}

function kiemTraLoginStudent() {

    if (typeof(Storage) !== undefined) {
        userlogin = sessionStorage.getItem('userLogin');
        if (userlogin === null) {
            // window.location.href = "../AtheneMain_HTML/HomePage.html";

            window.location.href = "./index.html";
            return alert("Vui lòng đăng nhập trước khi thực hiện đăng ký!")
        } else {
            window.location.href = "../Form_HTML/ProfileFindTutor.html";
            return true;
        }
    }

}

function kiemTraLoginTutor() {

    if (typeof(Storage) !== undefined) {
        userlogin = sessionStorage.getItem('userLogin');
        if (userlogin === null) {
            // window.location.href = "../AtheneMain_HTML/HomePage.html";

            window.location.href = "./index.html";
            return alert("Vui lòng đăng nhập trước khi thực hiện đăng ký!")
        } else {
            window.location.href = "../Form_HTML/ProfileFindStudent.html";
            return true;
        }
    }

}