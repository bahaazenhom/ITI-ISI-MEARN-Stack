var colors = ["red", "blue", "green", "orange"];
var i = 0;
$("body").on("click", "div", function() {
    console.log("Clicked on a box");
    var box = $(this).clone();
    box.attr("class", colors[++i%colors.length]);
    $("body").append(box);
});

var color;
$("body").on("mouseenter", "div", function() {
    console.log("Hovered over a box");
    color = colors.indexOf($(this).attr("class"));

    $(this).attr("class", colors[++color%colors.length]);
}).on("mouseleave", "div", function() {
    console.log("Mouse left a box");    
    $(this).attr("class", colors[--color]);

});
