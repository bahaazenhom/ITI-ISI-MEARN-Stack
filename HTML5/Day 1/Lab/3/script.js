function updateColor(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    console.log(color);
    
    document.getElementById("color-range").style.backgroundColor = color;
}