function valLevel() {
    var capHoc = document.forms.level;
    for (i = 0; i < capHoc.length; i++) {
        if (capHoc[i].checked == true)
            return true;
    }
    alert("Bạn vui lòng chọn cấp học mong muốn!");
    forms.level.focus();
    return false;

}

function valJobs() {
    var job = document.forms.jobs;
    for (i = 0; i < job.length; i++) {
        if (job[i].checked == true)
            return true;
    }
    alert("Vui lòng lựa chọn nghề nghiệp của bạn!");
    forms.jobs.focus();
    return false;

}

function valGender() {
    var gioiTinh = document.forms.gender;
    for (i = 0; i < gioiTinh.length; i++) {
        if (gioiTinh[i].checked == true)
            return true;
    }
    alert("Vui lòng chọn giới tính bạn mong muốn!");
    forms.gender.focus();
    return false;

}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

        return alert('Chỉ nhận giá trị số, mời bạn nhập lại!');
    }
    return true;
}
//------ProfileFindStudent-----------------
function submitForm() {

    var level1 = document.getElementById("cap1").checked.toString();
    var level2 = document.getElementById("cap2").checked.toString();
    var level3 = document.getElementById("cap3").checked.toString();
    var monhoc = document.getElementById("subject").value;
    var diachi = document.getElementById("khuvuc").value;
    var time = document.getElementById("time").value;
    var salary = document.getElementById("luong").value;
    var schedule = document.getElementById("schedule").value;
    var mota = document.getElementById("descrip").value;
    var nam = document.getElementById("nam").checked.toString();
    var nu = document.getElementById("nu").checked.toString();

    var user = new Object();

    if (level1 == 'true') {
        user.level = "Cấp 1";
    }
    if (level2 == 'true') {
        user.level = "Cấp 2";
    }
    if (level3 == 'true') {
        user.level = "Cấp 3";
    }
    if (level1 == 'true' && level2 == 'true') {
        user.level = "Cấp 1 & Cấp 2";
    }
    if (level2 == 'true' && level3 == 'true') {
        user.level = "Cấp 2 & Cấp 3";
    }
    if (level1 == 'true' && level3 == 'true') {
        user.level = "Cấp 1 & Cấp 3";
    }
    if (level1 == 'true' && level2 == 'true' && level3 == 'true') {
        user.level = "Cấp 1 & Cấp 2 & Cấp 3";
    }
    if (level1 == 'false' && level2 == 'false' && level3 == 'false') {
        user.level = " ";
    }

    user.subject = monhoc;

    if (nam == 'true') {
        user.gender = "Nam";
    }
    if (nu == 'true') {
        user.gender = "Nữ";
    }
    if (nam == 'true' && nu == 'true') {
        user.gender = "Nam & Nữ ";
    }
    if (nam == 'false' && nu == 'false') {
        user.gender = " ";
    }

    user.address = diachi + ";" + "TP.HCM";
    user.time = time;
    user.salary = salary;
    user.schedule = schedule;
    user.mota = mota;

    if (user.level == "" || user.subject == "" || user.gender == "" || user.address == "" || user.time == " " || user.salary == "" || user.schedule == "") {
        return alert("Vui lòng điền đầy đủ thông tin!");
    } else {
        var listFindStudent = JSON.parse(localStorage.getItem('listFindStudent'));
        if (listFindStudent == null) {
            listFindStudent = new Array();
        }
        if (typeof(Storage) !== undefined) {
            listFindStudent.push(user);

            window.location.href = "./index.html";

            localStorage.setItem('listFindStudent', JSON.stringify(listFindStudent));
            alert("Đăng ký thành công!");
            return true;

        } else {
            alert("Bạn chưa đăng nhập!");
            return false;
        }
    }
}


//----------------ProfileFindTutor--------------------------
function Submit() {

    var teacher = document.getElementById("gv").checked.toString();
    var student = document.getElementById("sv").checked.toString();
    var lop = document.getElementById("class").value;
    var monhoc = document.getElementById("subject").value;
    var sonha = document.getElementById("sonha").value;
    var duong = document.getElementById("duong").value;
    var phuong = document.getElementById("phuong").value;
    var quan = document.getElementById("quan").value;
    var kinhnghiem = document.getElementById("exp").value;
    var time = document.getElementById("time").value;
    var salary = document.getElementById("luong").value;
    var schedule = document.getElementById("schedule").value;
    var mota = document.getElementById("descrip").value;
    var nam = document.getElementById("nam").checked.toString();
    var nu = document.getElementById("nu").checked.toString();

    var user = new Object();

    if (teacher == 'true') {
        user.jobs = "Giáo viên";
    }
    if (student == 'true') {
        user.jobs = "Sinh viên";
    }
    if (teacher == 'true' && student == 'true') {
        user.jobs = "Giáo viên & Sinh viên ";
    }
    if (teacher == 'false' && student == 'false') {
        user.jobs = " ";
    }

    user.class = lop;
    user.subject = monhoc;

    if (nam == 'true') {
        user.gender = "Nam";
    }
    if (nu == 'true') {
        user.gender = "Nữ";
    }
    if (nam == 'true' && nu == 'true') {
        user.gender = "Nam & Nữ ";
    }
    if (nam == 'false' && nu == 'false') {
        user.gender = " ";
    }
    user.address = sonha + ";" + duong + ";" + phuong + ";" + quan + ";" + "TP.HCM";
    user.experience = kinhnghiem;
    user.time = time;
    user.salary = salary;
    user.schedule = schedule;
    user.mota = mota;

    if (user.jobs == "" || user.class == "" || user.subject == "" || user.gender == "" || user.address == "" || user.time == " " || user.salary == "" || user.schedule == "") {
        return alert("Vui lòng điền đầy đủ thông tin!");
    } else {
        var listFindTutor = JSON.parse(localStorage.getItem('listFindTutor'));
        if (listFindTutor == null) {
            listFindTutor = new Array();
        }
        if (typeof(Storage) !== undefined) {
            listFindTutor.push(user);

            window.location.href = "./index.html";

            localStorage.setItem('listFindTutor', JSON.stringify(listFindTutor));
            alert("Đăng ký thành công!");
            return true;

        } else {
            alert("Bạn chưa đăng nhập!");
            return false;
        }
    }
}