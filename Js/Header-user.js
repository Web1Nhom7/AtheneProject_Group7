function myNotification() {
    document.getElementById("myNoti").classList.toggle("noti-show");
}
window.onclick = function(event) {
    if (!event.target.matches('.btn-noti')) {
        var dropdowns = document.getElementsByClassName("noti-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('noti-show')) {
                openDropdown.classList.remove('noti-show');
            }
        }
    }
}


function myMenu() {
    document.getElementById("myDropdown").classList.toggle("dropdown-show");
}
window.onclick = function(event) {
    if (!event.target.matches('.btn-dropdown')) {
        var dropdowns = document.getElementsByClassName("menu-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropdown-show')) {
                openDropdown.classList.remove('dropdown-show');
            }
        }
    }
}


function Logout() {
    if (typeof(Storage) !== undefined) {
        window.location.href = "../AtheneMain_HTML/HomePage.html";
        sessionStorage.removeItem("userLogin");
        localStorage.removeItem("sessionLogin");
        return alert("Đăng xuất thành công!");
    }
}