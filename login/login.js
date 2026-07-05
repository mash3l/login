// تعريف المتغيرات
var loginEmail = document.getElementById("email");
var loginPassword = document.getElementById("password");
var errorMsg = document.getElementById("error");

// 1. جلب البيانات من LocalStorage
var users = [];
if (localStorage.getItem("obj") != null) {
    users = JSON.parse(localStorage.getItem("obj"));
}

function login() {
    // التحقق من الحقول الفارغة
    if (loginEmail.value === "" || loginPassword.value === "") {
        errorMsg.textContent = "Please fill in all fields.";
        errorMsg.style.color = "red";
        errorMsg.classList.add("text-red-500");
        return;
    }

    var isFound = false;
    var userName = "";

    // 2. البحث عن المستخدم
    for (var i = 0; i < users.length; i++) {
        // التحقق من الايميل والباسورد
        if (users[i].email.toLowerCase() === loginEmail.value.toLowerCase() && 
            users[i].password === loginPassword.value) {
            isFound = true;
            userName = users[i].name;
            break;
        }
    }

    // 3. التوجيه أو عرض الخطأ
    if (isFound) {
        errorMsg.textContent = "Success! Redirecting...";
        errorMsg.style.color = "green";
        errorMsg.classList.remove("text-red-500");
        errorMsg.classList.add("text-green-500");

        // حفظ اسم المستخدم للجلسة
        localStorage.setItem("sessionUsername", userName);

        // التوجيه للصفحة الرئيسية
        setTimeout(function() {
            location.href = "home/index.html";
        }, 1000);

    } else {
        errorMsg.textContent = "Incorrect email or password";
        errorMsg.style.color = "red";
        errorMsg.classList.add("text-red-500");
    }
}