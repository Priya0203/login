function validate() {
    let username = document.getElementById("uid");
    let password = document.getElementById("pwd");
    let submit = document.getElementById("submit");
    let er1 = document.getElementById("er1");
    let er2 = document.getElementById("er2");

    if (username.value.length < 3 || password.value.length < 8) {
        submit.disabled = true;
        alert("username and password should be greater than 2 & 8 respectively!");
    }
    else { submit.disabled = false; } //button is enabled

}

function edit11() {
    let phone = document.getElementById("phn_id");
    let address = document.getElementById("add");
    let pwd = document.getElementById("user_pwd");
    let c_pwd = document.getElementById("cnf_pwd");
    let edit_btn = document.getElementById("edit1");
    let submit1 = document.getElementById("submit");


    phone.setAttribute("contentEditable", "true");
    phone.removeAttribute("readonly");
    phone.style.background = "white";

    address.setAttribute("contentEditable", "true");
    address.removeAttribute("readonly");
    address.style.background = "white";

    pwd.setAttribute("contentEditable", "true");
    pwd.removeAttribute("readonly");
    pwd.style.background = "white";

    c_pwd.setAttribute("contentEditable", "true");
    c_pwd.removeAttribute("readonly");
    c_pwd.style.background = "white";


}

function save() {
    let phone = document.getElementById("phn_id");
    let address = document.getElementById("add");
    let pwd = document.getElementById("user_pwd");
    let c_pwd = document.getElementById("cnf_pwd");
    let edit_btn = document.getElementById("edit1");
    let submit1 = document.getElementById("submit");

    phone.setAttribute("contentEditable", "false");
    phone.style.background = "rgb(224, 241, 247)";

    address.setAttribute("contentEditable", "false");
    address.style.background = "rgb(224, 241, 247)";

    pwd.contentEditable=false;
    pwd.style.background="rgb(224, 241, 247)";

    c_pwd.contentEditable=false;
    c_pwd.style.background="rgb(224, 241, 247)";

}
