$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
        $(".hamburger").hide();
        $(".page").addClass("filterBlack");
        $("body").addClass("bw");
        $(".cross").show();
    });
});

$(".cross").click(function() {
    $(".menu").slideToggle("slow", function() {
        $(".cross").hide();
        $(".page").removeClass("filterBlack");
        $("body").removeClass("bw");
        $(".hamburger").show();
    });
});
