
function calcularValores(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    var delta = (b**2)-(4*(a)*(c));
    if (delta < 0){
        alert("Erro: Não existem raízes para esses valores")
        return false;
    }
    else {
        var posDelta = Math.sqrt((b**2)-(4*(a)*(c)));
    }
    var d = ((-b)+posDelta)/2*(a);
    var e = ((-b)-posDelta)/2*(a);
    
    document.getElementById('raiz1').setAttribute("value", d);
    document.getElementById('raiz2').setAttribute("value", e);
}
function mostrar(){    
    document.getElementById('raizes').style.display = 'block';
}