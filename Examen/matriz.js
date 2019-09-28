var Generate_Random_Color = /** @class */ (function () {
    function Generate_Random_Color() {
    }
    //La funcion Color tiene 9 variables, esas variables, mismas que generan el codigo rgb para cada espacio de la matriz. 
    //Utiliza el math.floor para redondear los valores que puede obtener el random, para que no mande numeros con punto decimal.
    //En el random el 255 es el maximo del numero que puede tomar.
    Generate_Random_Color.prototype.Color = function () {
        var color1 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color2 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color3 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color4 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color5 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color6 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color7 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color8 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        var color9 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        //Mediante los document se manda el color al background de cada uno de los espacios de la matriz, los detecta por el ID.
        document.getElementById("espacio1").style.backgroundColor = color1;
        document.getElementById("espacio2").style.backgroundColor = color2;
        document.getElementById("espacio3").style.backgroundColor = color3;
        document.getElementById("espacio4").style.backgroundColor = color4;
        document.getElementById("espacio5").style.backgroundColor = color5;
        document.getElementById("espacio6").style.backgroundColor = color6;
        document.getElementById("espacio7").style.backgroundColor = color7;
        document.getElementById("espacio8").style.backgroundColor = color8;
        document.getElementById("espacio9").style.backgroundColor = color9;
    };
    return Generate_Random_Color;
}());
//Esta funcion es la que usa el boton de la pagina manda llamar a la funcion Color.
function randomColor() {
    var obj = new Generate_Random_Color();
    obj.Color();
}
