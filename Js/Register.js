   function submitFormLearner(ho, ten, sodt, pass, dob, gender, sonha, duong, phuong, quan, cccd, date) {

       ho = document.getElementById("ho").value;
       ten = document.getElementById("ten").value;
       sodt = document.getElementById("sodt").value;
       pass = document.getElementById("pass").value;
       dob = document.getElementById("dob").value;
       sonha = document.getElementById("sonha").value;
       duong = document.getElementById("duong").value;
       phuong = document.getElementById("phuong").value;
       quan = document.getElementById("quan").value;
       cccd = document.getElementById("cccd").value;
       date = document.getElementById("ngaycap").value;

       var user = new Object();
       user.name = ho + ' ' + ten;
       user.phone = sodt;
       user.password = pass;
       user.birthday = dob;
       user.gender = gender == "0" ? "nam" : "nữ";
       user.address = sonha + ";" + duong + ";" + phuong + ";" + quan + ";" + "TP.HCM";
       user.CCCD = cccd;
       user.ngayCapCCCD = date;
       user.id = createIDCustomer();


       var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));
       if (listCustomer == null) {
           listCustomer = new Array();
       }

       if (checkCustomerExist(listCustomer, sodt) == false) {
           listCustomer.push(user);

           // window.location.href = "../Login.html ";

           localStorage.setItem('listCustomer', JSON.stringify(listCustomer));
           //    localStorage.setItem('listLearner', JSON.stringify(listCustomer));

           alert("Đăng ký thành công!" + "\n" + "Hãy đăng nhập vào website.");
           return true;
       } else {
           alert("Khách hàng đã tồn tại!");
           return false;
       }




   }




   function submitFormTutor(ho, ten, sodt, pass, dob, gender, sonha, duong, phuong, quan, tp, cccd, date, svt, majors, exp, degree) {

       ho = document.getElementById("ho").value;
       ten = document.getElementById("ten").value;
       sodt = document.getElementById("sodt").value;
       pass = document.getElementById("pass").value;
       dob = document.getElementById("dob").value;
       sonha = document.getElementById("sonha").value;
       duong = document.getElementById("duong").value;
       phuong = document.getElementById("phuong").value;
       quan = document.getElementById("quan").value;
       cccd = document.getElementById("cccd").value;
       date = document.getElementById("ngaycap").value;

       svt = document.getElementById("svt").value;
       majors = document.getElementById("chuyennganh").value;
       exp = document.getElementById("exp").value;
       degree = document.getElementById("degree").value;

       var user = new Object();
       user.name = ho + ' ' + ten;
       user.phone = sodt;
       user.password = pass;
       user.birthday = dob;
       user.gender = gender == "0" ? "nam" : "nữ";
       user.address = sonha + ";" + duong + ";" + phuong + ";" + quan + ";" + "TP.HCM";
       user.CCCD = cccd;
       user.ngayCapCCCD = date;
       user.id = createIDCustomer();

       user.trinhDo = svt;
       user.majors = majors;
       user.exp = exp;
       user.degree = degree;


       var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));
       if (listCustomer == null) {
           listCustomer = new Array();
       }

       if (checkCustomerExist(listCustomer, sodt) == false) {
           listCustomer.push(user);

           // window.location.href = "../Login.html ";

           localStorage.setItem('listCustomer', JSON.stringify(listCustomer));
           //    localStorage.setItem('listTutor', JSON.stringify(listCustomer));

           alert("Đăng ký thành công!" + "\n" + "Hãy đăng nhập vào website.");
           return true;
       } else {
           alert("Khách hàng đã tồn tại!");
           return false;
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
       id = Math.random().toString().substring(2, 6) + '_' + id.toString();
       return id;
   }