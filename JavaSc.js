function calculate() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  var delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    alert("Error: There are no real values ​​for this sentence");
    return false;
  } else {
    var posDelta = Math.sqrt(b ** 2 - 4 * a * c);
  }
  var d = ((-b + posDelta) / 2) * a;
  var e = ((-b - posDelta) / 2) * a;

  document.getElementById("raiz1").innerText = d.toFixed(4);
  document.getElementById("raiz2").innerText = e.toFixed(4);
}
function show() {
  document.getElementById("raizes").style.display = "block";
}
