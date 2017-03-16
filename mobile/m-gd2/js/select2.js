//##########################閫夋嫨鍒楄〃##############################
function choselist() {
    $("#My_form .xiala2").on("click", function() {
        var thisinput = $("#My_form .search_box input");
        var thisul = $("#My_form .search_box ul");

        if (thisul.css("display") == "none") {
            // if(thisul.height()>200){thisul.css({height:"200"+"px","overflow-y":"scroll" })};
            thisul.fadeIn("100");
            thisul.hover(function() {}, function() { thisul.fadeOut("100"); })
            thisul.find("li").on("click", function() {
                thisinput.val($(this).text());
                thisul.fadeOut("100");
            });

        } else {
            thisul.fadeOut("fast");
        }
    })
}
//##############################################################


window.onload = function() {
    choselist();
}