// 1 -------------------------------------
$(".container1 div").css("background-color", function() {
	return this.className;
});
$(".container1 p").css("color", function() {
	return this.className;
});

// 2 -------------------------------------
$(".container2 a[href*=google]").each(function(i, ele) {
	$(ele).text("Google");
});

$(".container2 a[href$=org]").each(function(i, ele) {
    $(ele).text("IEEE");
});

$(".container2 a[href^=https]").each(function(i, ele) {
    $(ele).text("Facebook");
});

$(".container2 a[href^=http]").each(function(i, ele) {
    $(ele).text(ele.text+" Official Website");
});

// 3 -------------------------------------

$(".container3 figure:eq(2)").each(function() {
    // 1 
    $(this).find("figcaption").text("fig.3 - Orange Juice");
    $(this).find("img").attr("src", "img/orange.png");

    // 2
    $(this).children("figcaption").text("fig.3 - Orange Juice");
    $(this).children("img").attr("src", "img/orange.png");
});

// 4 -------------------------------------
$(".container4 td").each(function(i, ele) {
    if($(ele).attr("class") == "my-name") 
    $(ele).css("color","blue");

    if((i+1)%2!=0)$(ele).css("background-color", "pink");
});

$(".container4 table:first tr:last td:eq(1)").css("font-weight", "bold");

// 5 -------------------------------------
$(".container5 ul li:eq(1)").css("font-style", "italic");

$(".container5 ol li:eq(1)").next().css("color", "red");
