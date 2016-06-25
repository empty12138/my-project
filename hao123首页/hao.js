var oBtn = document.getElementById("style");

function btn1() {
    oBtn.className = "green";
    setCookie("pifu", "green");
    setStorage("pifu", "green")
}

function btn2() {
    oBtn.className = "yellow";
    setCookie("pifu", "yellow");
    setStorage("pifu", "yellow")
}

function btn3() {
    oBtn.className = "blue";
    setCookie("pifu", "blue");
    setStorage("pifu", "blue")
}

//封装cookie
function setCookie(name, value) {
    var cookieName = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    document.cookie = cookieName;
    return document.cookie
}
//获取cookie
function getCookie(name) {
    var arr = 0;
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//localStorage封装
function setStorage(name, value) {
    localStorage.setItem(name, value);
    return localStorage.getItem(name);
}

//判断cookie并使用cookie
var pifu = document.getElementById("style");
if (document.cookie) {
    pifu.className = getCookie("pifu")
} else if (localStorage.getItem("pifu")) {
    pifu.className = localStorage.getItem("pifu");
}