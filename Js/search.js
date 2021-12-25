function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");

    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        " "
    );
    return str;
}

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("profile__item");
    if (c == "show") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

///-------ForStudent---------------------------------
function myFunctionFortudent(arr) {
    var div = "";
    var quan = "";
    var lop = "";
    var gtinh = "";
    var level = "";
    var subject = "";

    for (var i = 0; i < arr.length; i++) {
        quan = removeVietnameseTones(arr[i].Direct).replace(/\s/g, "").toLowerCase();

        lop = removeVietnameseTones(arr[i].class).replace(/\s/g, "").toLowerCase();

        if (arr[i].Gender == "Nam") {
            gtinh = "nam";
        } else if (arr[i].Gender == "Nữ") {
            gtinh = "nu";
        }

        if (arr[i].Level == "Sinh viên") {
            level = "sinhvien";
        } else if (arr[i].Level == "Giáo viên") {
            level = "giaovien";
        }

        subject = removeVietnameseTones(arr[i].Subject).replace(/\s/g, "").toLowerCase();


        div += '<div class="profile__item ' +
            quan + ' ' +
            lop + ' ' + gtinh + ' ' +
            level + ' ' +
            subject + ' show">' +
            '<div>' +
            '<img class="avatar" src="' + arr[i].Ava + '">' +
            '<div class="profile__item--right">' +
            '<div class = "profile-name">' + arr[i].Name + '</div>' +
            '<div><i class="fa fa-map-marker profile-icon"> &nbsp </i>' +  arr[i].Direct + '</div>' +
            '<p><i class = "fa fa-user profile-icon"> &nbsp </i>' +  arr[i].Gender +
            '</p></div>' +
            '<div class="profile__item--center">' +
            '<p> Môn học: <span class = "text-spacing">' + arr[i].Subject +
            '</span></p>' + '<p> Lớp dạy: <span class = "text-spacing">' + arr[i].class +
            '</span></p>' +
            '<p> Học phí: <span class = "text-spacing">' + arr[i].Fee +
            '</span></p>' +
            '<p> Học vấn: <span class = "text-spacing">' + arr[i].Education +
            '<span></p></div>' +
            '<div class="profile__item--below">' +
            '<button class="profile__button btn-profile" id="btn-confirm" onclick="openConfirmation()">Đăng ký</button>' +
            '<div id="myConfirmation" class="confirmation">' +
            '<div class="confirmation-content">' +
            '<span class="close">&times;</span>' +
            '<p>Bạn chắc chắn muốn gửi yêu cầu tạo lớp tới gia sư này?</p>' +
            '<div class="confirm-container">' +
            '<button id="btn-yes" onclick="clickYes()" class="confirm-btn">Có</button>' +
            '<button onclick="clickNo()" class="confirm-btn">Không</button>' +
            '</div>' + '</div>' + '</div>' +
            '<a href = "./ShowTutorProfile.html"><button class = "profile__button btn-profile"> Xem profile </button></a>' +
            '</div>' + '</div>' + '</div>';
    }
    document.getElementById("list_profile").innerHTML = div;
}

function searchForStudent() {
    var value_quan = document.getElementById("district").value;
    var value_lop = document.getElementById("class").value;
    var value_level = document.getElementById("level").value;
    var value_monhoc = document.getElementById("subject").value;
    var value_gender = document.getElementById("gender").value;


    var tongHop = ' ';
    var quan_sel = '',
        level_sel = '',
        gender_sel = '',
        class_sel = '',
        monhoc_sel = '';


    quan_sel = (value_quan == "quanhuyen") ? '' : ' ' + value_quan;
    level_sel = (value_level == "trinhdo") ? '' : ' ' + value_level;
    gender_sel = (value_gender == "gioitinh") ? '' : ' ' + value_gender;
    class_sel = (value_lop == "lophoc") ? '' : ' ' + value_lop;
    monhoc_sel = (value_monhoc == "monhoc") ? '' : ' ' + value_monhoc;


    tongHop = quan_sel + level_sel + gender_sel + class_sel + monhoc_sel;
    filterSelection(tongHop)
}


///---------------ForTutor-----------------------
function myFunctionForTutor(arr) {
    var div = "";
    var quan = "";
    var caphoc = "";
    var gtinh = "";
    var level = "";
    var subject = "";

    for (var i = 0; i < arr.length; i++) {
        quan = removeVietnameseTones(arr[i].Direct).replace(/\s/g, "").toLowerCase();

        caphoc = removeVietnameseTones(arr[i].Caphoc).replace(/\s/g, "").toLowerCase();

        if (arr[i].Gender == "Nam") {
            gtinh = "nam";
        } else if (arr[i].Gender == "Nữ") {
            gtinh = "nu";
        }

        level = removeVietnameseTones(arr[i].Education).replace(/\s/g, "").toLowerCase();

        subject = removeVietnameseTones(arr[i].Subject).replace(/\s/g, "").toLowerCase();


        div += '<div class="profile__item ' +
            quan + ' ' +
            caphoc + ' ' + gtinh + ' ' +
            level + ' ' +
            subject + ' show">' +
            '<div>' +
            '<img class="avatar" src="' + arr[i].Ava + '">' +
            '<div class="profile__item--right">' +
            '<div class = "profile-name">' + arr[i].Name + '</div>' +
            '<div><i class="fa fa-map-marker profile-icon">&nbsp</i>' + arr[i].Direct + '</div>' +
            '<p><i class = "fa fa-user profile-icon">&nbsp </i>' + arr[i].Gender +
            '</p></div>' +
            '<div class="profile__item--center">' +
            '<p> Trình độ: <span class = "text-spacing">' + arr[i].Education +
            '</span></p>' + '<p> Môn đăng ký: <span class = "text-spacing">' + arr[i].Subject +
            '</span></p>' +
            '<p> Mức lương: <span class = "text-spacing">' + arr[i].Fee +
            '</span></p>' +
            '<p> Yêu cầu: <span class = "text-spacing">' + arr[i].Request +
            '</span></p></div>' +
            '<div class="profile__item--below">' +
            '<button class="profile__button" id="btn-confirm" onclick="openConfirmation()">Đăng ký nhận lớp</button>' +
            '<div id="myConfirmation" class="confirmation">' +
            '<div class="confirmation-content">' +
            '<span class="close">&times;</span>' +
            '<p>Bạn chắc chắn muốn nhận lớp dạy này chứ?</p>' +
            '<div class="confirm-container">' +
            '<button id="btn-yes" onclick="clickYes()" class="confirm-btn">Có</button>' +
            '<button onclick="clickNo()" class="confirm-btn">Không</button>' +
            '</div>' + '</div>' + '</div>' +
            '</div>' + '</div>' + '</div>';
    }
    document.getElementById("list_profile").innerHTML = div;
}

function searchForTutor() {
    var value_quan = document.getElementById("district").value;
    var value_caphoc = document.getElementById("caphoc").value;
    var value_level = document.getElementById("level").value;
    var value_monhoc = document.getElementById("subject").value;
    var value_gender = document.getElementById("gender").value;


    var tongHop = ' ';
    var quan_sel = '',
        level_sel = '',
        gender_sel = '',
        caphoc_sel = '',
        monhoc_sel = '';;

    quan_sel = (value_quan == "quanhuyen") ? '' : ' ' + value_quan;
    level_sel = (value_level == "trinhdo") ? '' : ' ' + value_level;
    gender_sel = (value_gender == "gioitinh") ? '' : ' ' + value_gender;
    caphoc_sel = (value_caphoc == "caphoc") ? '' : ' ' + value_caphoc;
    monhoc_sel = (value_monhoc == "monhoc") ? '' : ' ' + value_monhoc;


    tongHop = quan_sel + level_sel + gender_sel + caphoc_sel + monhoc_sel;
    filterSelection(tongHop)
}


//-------Open popup----
function openConfirmation() {
    var confirmation = document.getElementById("myConfirmation");
    var confirm = document.getElementById("btn-confirm");
    var shut_down = document.getElementsByClassName("close")[0];
    confirm.onclick = function() {
        confirmation.style.display = "block";
    }
    shut_down.onclick = function() {
        confirmation.style.display = "none";
    }

}

function clickYes() {
    var confirmation = document.getElementById("myConfirmation");
    confirmation.style.display = "none";
    alert("Bạn đã đăng ký thành công");
}

function clickNo() {
    var confirmation = document.getElementById("myConfirmation");
    confirmation.style.display = "none";
}