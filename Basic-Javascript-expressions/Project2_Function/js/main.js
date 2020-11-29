function Function() {                                             //My += operator function
    var q=25;
    var w=32;
    var pin=(q += w);
    document.getElementById("Function").innerHTML="q += w =" + pin ;
    return Function;                                                     // to display the result of my function
}
