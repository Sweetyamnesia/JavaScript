let showHideBtn = document.getElementById("show-hide-btn");
console.log("button");

let pw = document.getElementById("pw");
console.log("pw");

showHideBtn.addEventListener("click", function () {
    if (pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}); 












