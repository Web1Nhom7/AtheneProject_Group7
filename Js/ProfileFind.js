// var level = document.getElementById('level').value;
// var subject = document.getElementById('subject').value;
// var gender = document.getElementById('gender').value;
// var address = document.getElementById('khuvuc').value;
// var time = document.getElementById('time').value;
// var salary = document.getElementById('luong').value;
// var schedule = document.getElementById('schedule').value;
// var decrip = document.getElementById('mota').value;




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