function Sentence() {                             // Concate method example js comment
    var sen_1 = "This is ";
    var sen_2 = "my Concate ";
    var sen_3 = "method ";
    var sen_4 = " example.";
    var completeSentence = sen_1.concat(sen_2, sen_3, sen_4);
    document.getElementById("EXA1").innerHTML = completeSentence;
}                                               // Concate method example END

function slice_Function() {                                      // Slice method example js comment
    var Sent = "This is my example sentence for slice method.";
    var part = Sent.slice(10,18);
    document.getElementById("EXA2").innerHTML = part;
}                                                          // Slice method example END

function string_Function() {                                     // toSting method example js comment
    var xyz = 9409;
    document.getElementById("EXA3").innerHTML = xyz.toString();
}                                                            // toString method example END

function precision_Function() {
    var zyx = 22369258.55628764922546;
    document.getElementById("EXA4").innerHTML = zyx.toPrecision(20);

}