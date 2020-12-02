function my1Pc(z,x) {
    document.write(x+"'s are great Computers so are "+z+"'s.<br>");
}
function my2Pc(z,x) {
    document.write("My secound Computer was a " +z+"<br>");
    my1Pc(z,x);
}
function displayFunction() {
    document.getElementById("nest_Id").innerHtml=my1Pc + my2Pc;
}
my2Pc("Dell", "Samsung");


class PC {
    constructor(Brand, Ram, Storage, Prossesor) {
        this.PC_Brand = Brand;
        this.PC_Ram = Ram;
        this.PC_Storage = Storage;
        this.PC_Prossesor = Prossesor;
    }
}
var Comp_1 = new PC("HP", "8GB Ram", "500GB SSD", "Intel Core i7");
var Comp_2 = new PC("Dell", "4GB Ram", "225GB SSD", "Intel Core i5");
var Comp_3 = new PC("Samsung", "8GB Ram", "1TB SSD", "Intel Core i9");
function N_T_Function() {
    document.getElementById("New_and_This").innerHTML= "New Computer has these Fetures"+ Comp_3.PC_Ram + Comp_3.PC_Storage + Comp_3.PC_Prossesor;
}