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

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

        return alert('Chỉ nhận giá trị số, mời bạn nhập lại!');
    }
    return true;
}
//------ProfileFindStudent-----------------
function submitForm(level, monhoc, gender, diachi, time, salary, schedule, mota) {

    level = document.getElementById("level").value;
    monhoc = document.getElementById("subject").value;
    diachi = document.getElementById("khuvuc").value;
    time = document.getElementById("time").value;
    salary = document.getElementById("luong").value;
    schedule = document.getElementById("schedule").value;
    mota = document.getElementById("descrip").value;

    var user = new Object();


    user.level = level;
    user.subject = monhoc;
    user.gender = gender == "0" ? "Nam" : "Nữ";

    user.address = diachi + ";" + "TP.HCM";
    user.time = time;
    user.salary = salary;
    user.schedule = schedule;
    user.mota = mota;

    if (typeof(Storage) !== undefined) {

        window.location.href = "./AtheneMain_HTML/HomePage.html";

        localStorage.setItem('listFindStudent', JSON.stringify(user));
        alert("Đăng ký thành công!");
        return true;

    } else {
        alert("Bạn chưa đăng nhập!");
        return false;
    }
}


//----------------ProfileFindTutor--------------------------
function Submit(jobs, lop, monhoc, gender, sonha, duong, phuong, quan, kinhnghiem, time, salary, schedule, mota) {

    lop = document.getElementById("class").value;
    monhoc = document.getElementById("subject").value;
    sonha = document.getElementById("sonha").value;
    duong = document.getElementById("duong").value;
    phuong = document.getElementById("phuong").value;
    quan = document.getElementById("quan").value;
    kinhnghiem = document.getElementById("exp").value;
    time = document.getElementById("time").value;
    salary = document.getElementById("luong").value;
    schedule = document.getElementById("schedule").value;
    mota = document.getElementById("descrip").value;
    // gender = document.getElementById("gender").value;

    var user = new Object();
    user.jobs = jobs == "giaovien" ? "Giáo viên" : "Sinh viên";

    user.class = lop;
    user.subject = monhoc;
    user.gender = gender == "0" ? "Nam" : "Nữ";

    user.address = sonha + ";" + duong + ";" + phuong + ";" + quan + ";" + "TP.HCM";
    user.experience = kinhnghiem;
    user.time = time;
    user.salary = salary;
    user.schedule = schedule;
    user.mota = mota;

    if (typeof(Storage) !== undefined) {

        window.location.href = "./AtheneMain_HTML/HomePage.html";

        localStorage.setItem('listFindTutor', JSON.stringify(user));
        alert("Đăng ký thành công!");
        return true;

    } else {
        alert("Bạn chưa đăng nhập!");
        return false;
    }
}