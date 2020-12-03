function Time_Function() {                             //My Time function also a good example of if else else if statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0 ) {
       Reply = "It Is Morning Time Now!" ;
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It Is Now Evening Time!";
    }
    else {
        Reply = "It Is Night Time!!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; 
}
                      //End of My Time function

function err_Function() {                             //for error example 
    var exa9;
    exa9 = document.getElementById("errors");
    document.write(exa9);
}
var exa8 = "This is global variable";              //my global variable example


