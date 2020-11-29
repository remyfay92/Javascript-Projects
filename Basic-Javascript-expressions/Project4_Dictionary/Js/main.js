function dict_Function() {                // my dictionary function
    var Clothes= {
        Tops:"Blouse",
        Bottum:"Skirt",
        Shoes:"Heels",
        Bag:"Clutch"
    }
    delete Clothes.Bag                                                // deleteing Bag from Clothes Dictionary
    document.getElementById("Dictionary").innerHTML= Clothes.Bag;        
}