function Doc_Function() {
var Doc =(typeof 3);
document.getElementById("exa1").innerHTML=Doc;          // this displays type of example in id exa1
return Doc_Function
}
var doc2 = document.write("10+5");
document.getElementById("exa2").innerHTML= doc2;         //this displays string and number in id exa2

document.getElementById("exa3").innerHTML= document.write(5<20);                     // this displays    in id exa3

document.getElementById("exa4").innerHTML= document.write(10>4);                   // this displays     in id exa4

document.getElementById("exa5").innerHTML= document.write(6==(2+4));                         // this displays    in id exa5