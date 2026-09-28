
$("h1").hide();

$("h2").hide();

$("h3").hide();

$("h4").hide();


$("h5").on("click", function () {
  $("h5").hide();

  $("h1")
    .fadeIn("slow")

});

$("h1").on("click", function () {
  $("h1").hide();

  $("h2")
    .fadeIn("slow")
    .delay(4000)
    .fadeOut("slow", function () {
      scrollBg(700, 5000);
     $("#truck").animate({ bottom: "300%" }, 5000, "linear");
     $("#moon").animate({ bottom: "300%" }, 5000, "linear");
     $("#land").animate({ bottom: "225%" }, 4000, "linear");
     $("#can").addClass("show");
     
      if ($(window).width() >= 768) {
          scrollBg(1500, 5000);
        } 
        else {
        scrollBg(700, 5000);
      }

    });

 $("h3")
    .delay(10000)
   .fadeIn("slow")
  
});

$("h3").on("click", function () {
  $("h3").hide();

  $("h4")
    .fadeIn("slow")
    .delay(4000)
    // .fadeOut("slow");

});

function scrollBg(pixels, duration) {
  const maxScroll = $("#bg").height() - $(window).height();
  const current = -parseFloat($("#bg").css("top"));           
  const target = Math.min(current + pixels, maxScroll);       
  $("#bg").animate({ top: -target }, duration, "linear");
}

// $().on("click", function(){});