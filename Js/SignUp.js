// Thông báo chọn loại giới tính
function valGender() {
    var gioiTinh = document.forms.gender;
    for (i = 0; i < gioiTinh.length; i++) {
        if (gioiTinh[i].checked == true)
            return true;
    }
    // Thông báo nhập lại và focus vào chỗ cần nhập