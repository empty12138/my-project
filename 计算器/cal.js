var num = 0,
    result = 0,
    numshow = "0";
var operate = 0; //判断输入状态的标志




function command(num) {
    var str = document.getElementById("numScreen").value; //获得当前显示数据
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
    str = str + num + ""; //给当前值追加字符 
    document.getElementById("numScreen").value = str; //刷新显示 
    operate = 0; //重置输入状态 
    quit = 0; //重置防止重复按键的标志 
}




function dzero() {
    var str = document.getElementById("numScreen").value;
    str = (str != "0") ? ((operate == 0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
    document.getElementById("numScreen").value = str;
    operate = 0;
}

function dot() {
    var str =document.getElementById("numScreen").value;
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    document.getElementById("numScreen").value = str;
    operate = 0;
}

function del() { //退格 
    var str = document.getElementById("numScreen").value;
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.getElementById("numScreen").value = str;
}

function clearscreen() { //清除数据 
    num = 0;
    result = 0;
    numshow = "0";
    document.getElementById("numScreen").value = "0";
}
var calcul = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志 










function plus() { //加法 
    calculate(); //调用下面的计算函数 
    operate = 1; //更改输入状态 
    calcul = 1; //switch变量，更改计算方法 
}

function minus() { //减法 
    calculate();
    operate = 1;
    calcul = 2;
}

function times() { //乘法 
    calculate();
    operate = 1;
    calcul = 3;
}

function divide() { //除法 
    calculate();
    operate = 1;
    calcul = 4;
}
xz

function equal() {
    calculate(); //等于 
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}

// 
function calculate() {
    numshow = Number(document.getElementById("numScreen").value);
    if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
        switch (calcul) { //判断要输入状态 
            case 1:
                result = num + numshow;
                break; //计算"+" 
            case 2:
                result = num - numshow;
                break; //计算"-" 
            case 3:
                result = 100 * num * numshow / 100;
                break;
            case 4:
                if (numshow != 0) {
                    result = num / numshow;
                } else {
                    alert("被除数不能为零！");
                }
                break;
        }
        quit = 1; //避免重复按键 
    } else {
        result = numshow;
    }
    numshow = parseFloat(result.toFixed(6));
    document.getElementById("numScreen").value = numshow;
    num = result; //存储当前值
}






