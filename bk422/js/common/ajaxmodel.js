
/*tech*/
var ajax_content={
    tech_ajax_content:function(){
        function transF($clickIndex,$thisIndex){
        setTimeout(function(){
             $.ajax({
        url: "/tech/"+$clickIndex+".php",
        type: "POST",
        success: function (data,status) {
            $(".tech-btn").eq($thisIndex).siblings(".main-content-textblock").find(".ajax-content").html(data);
            $(".loadnow").hide();
        },
        errot:function(){
            alert(error);
        },
        cache:false,
    });
        },2000)
}
   $(".tech-btn a").each(function(i){
        $(this).click(function(){
        var thisClickIndex=$(this).data("clickindex");
           transF(thisClickIndex,i);
           $(this).html("<p class='loadnow'><img src='./img/loading.gif' alt='' /></p>");
    });
    });
},
    /*discovery*/
    discovery_ajax_content:function(){
        function transF($clickIndex,$thisIndex){
            setTimeout(function(){
                $.ajax({
        url: "/discovery/"+$clickIndex+".php",
        type: "POST",
        success: function (data,status) {
            $(".discovery-main-btn").eq($thisIndex).siblings(".main-content-textblock").find(".discovery-ajax-content").html(data)
             $(".loadnow").hide();
        },
        errot:function(){
            alert(error);
        },
        cache:false,
    });
            },1500)
    
}
   $(".discovery-main-btn a").each(function(i){
        $(this).click(function(){
        var thisClickIndex=$(this).data("clickindex");
           transF(thisClickIndex,i);
           $(this).html("<p class='loadnow'><img src='./img/loading.gif' alt='' /></p>");
    });
    });
    }
}
 ajax_content.discovery_ajax_content();
 ajax_content.tech_ajax_content();


