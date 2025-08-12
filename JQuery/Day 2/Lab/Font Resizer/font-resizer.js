$("#increase").on("click", function() {
    var currentSize = parseInt($(".content").css("font-size"));
    if(currentSize >= 32) {
        $(".error").text("Maximum font size reached");
         $(".error").css("color", "red");
        return;
    }
    $(".content").css("font-size", (currentSize + 2) + "px");
});

$("#decrease").on("click", function() {
    var currentSize = parseInt($(".content").css("font-size"));
    if(currentSize <= 32)  $(".error").text("");
    if(currentSize <= 12) {
        $(".error").text("Minimum font size reached");
        $(".error").css("color", "red");
        return;
    }
    $(".content").css("font-size", (currentSize - 2) + "px");
})