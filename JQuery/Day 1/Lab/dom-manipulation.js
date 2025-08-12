// 1 -------------------------------------
$(".container1").append("<div class = black></div>");
$(".container1 div:first").before("<div class = white></div>");
$(".pink").before("<p class=yellow></p>");

// 2 -------------------------------------
$(".container2 p").each(function(i, ele) {
    $(ele).replaceWith("<a href = http://"+$(ele).text()+">" + $(ele).text() + "</a>");
});

// 3 -------------------------------------
$(".container3 img").each(function() {
    $(this).replaceWith("<figure>" + this.outerHTML + "<figcaption>Coffee</figcaption></figure>");
});

// 4 -------------------------------------
$(".container4 td").each(function(i, ele) {
    
    if($(ele).text()=="Mohsen") $(ele).addClass("man");
 
    if($(ele).hasClass("col-age"))$(ele).html("");

    if($(ele).hasClass("your-email"))$(ele).removeClass("your-email");
    else $(ele).addClass("your-email");
});

// 5 -------------------------------------
$(".container5 li").each(function(i, ele){
    if((i+1)%3==0){
        $(ele).css("background-color", "lightblue");
        $(ele).text($(ele).text() +" "+ (i + 1));
        console.log(i+": "+$(ele).text());
    }
})

// 6 -------------------------------------
$(".container5 input[name='username']").attr("name", "<yourname>");
$("#my-form input[type='checkbox'").attr("checked",true);