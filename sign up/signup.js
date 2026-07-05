var signUpName = document.getElementById("name");
var signUpEmail = document.getElementById("email");
var signUpPassword = document.getElementById("password");
var errorMsg = document.getElementById("error");

// 1. جلب البيانات القديمة إن وجدت، أو إنشاء مصفوفة فارغة
var user = [];
if (localStorage.getItem("obj") != null) {
    user = JSON.parse(localStorage.getItem("obj"));
}

function add() {
    // التحقق من الحقول الفارغة
    if (signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === "") {
        if(errorMsg) {
            errorMsg.textContent = "Please fill in all fields.";
            errorMsg.style.color = "red";
            errorMsg.classList.add("text-red-500"); // إضافة كلاس Tailwind للأمان
        } else {
            alert("Please fill in all fields.");
        }
    } else {
        var obj = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        };

        // التحقق من تكرار الإيميل
        var isExist = false;
        for(var i = 0; i < user.length; i++){
            if(user[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
                isExist = true;
                break;
            }
        }

        if(isExist){
            if(errorMsg) {
                errorMsg.textContent = "Email already exists!";
                errorMsg.style.color = "red";
                errorMsg.classList.add("text-red-500");
            } else {
                alert("Email already exists!");
            }
        } else {
            // إضافة المستخدم الجديد
            user.push(obj);
            localStorage.setItem("obj", JSON.stringify(user));
            
            if(errorMsg) {
                errorMsg.textContent = "Success!";
                errorMsg.style.color = "green";
                errorMsg.classList.remove("text-red-500");
                errorMsg.classList.add("text-green-500");
            }

            // الانتقال لصفحة تسجيل الدخول بعد ثانية واحدة
            setTimeout(function(){
                location.href = "../index.html";
            }, 1000);
        }
    }
}