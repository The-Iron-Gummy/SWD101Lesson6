$(document).ready(function(){
    $("#firstDiv").hover(function () {
        $(this).css("background-color", "green");
    }, function () {
        $(this).css("background-color", "blue");
    });
});
$(document).ready(function () {
    $("#hide").click(function () {
        $(".shape").hide();
    });
});
$(document).ready(function () {
    $("#firstH").hover(function () {
        $(this).css("font-size", "80px");
    }, function () {
        $(this).css("font-size", "25px");
    });
});
$(document).ready(function () {
    $("#p1").dblclick(function () {
        $(this).css("font-family", "Georgia");
    });
});
$(document).ready(function () {
    $("#hide").keypress(function () {
        $(this).css("background-color", "purple");
    });
});

