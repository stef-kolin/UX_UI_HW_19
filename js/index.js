console.log("Your index.js file is loaded correctly!");

$(".navleft").mouseenter(function () {
   $(".hoveron").css("display","block");
   $(".hoveroff").css("display","none");

   
});

$(".navleft").mouseleave(function () {
   $(".hoveron").css("display","none");
   $(".hoveroff").css("display","block");
});