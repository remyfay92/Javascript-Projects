window.alert(Math.random()*100);  //this is my Math.random() example
function add_Function() {
    var add= (10-4)+9/2*6;                                              //add_Function has my +,-,+,/ operators
    document.getElementById("Math").innerHTML="(10-4)+9/2*6=" + add;
    return add_Function;
}
function div_Function() {
    var div= 6 % 2;
    document.getElementById("Math2").innerHTML="6 % 2=" + div;       //div_Function is for my % operator
    return div_Function;
}
function up_Function() {
    var x = 10;
    x++;
    document.getElementById("Math3").innerHTML=x;
    return up_Function;                                       //up_Function is my ++ operators
}
function down_Function() {
    var y = 15;
    y --;
    document.getElementById("Math4").innerHTML=y;                   // down_Function is my -- operators
    return down_Function
}