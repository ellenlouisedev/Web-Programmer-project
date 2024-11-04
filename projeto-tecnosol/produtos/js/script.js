//-----Global Vars-------------------------------------------------------------------------------
var website_spinner,
    page_spinner;
var isSplash = true;
$('.sf-menu > li > a .button_act').css({opacity:0});

$(document).ready(function(){
    var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:138,//mandatory property for decktop
		bottomMargin:148,//mandatory property for decktop
		topMarginMobileDevices:138,//mandatory property for mobile devices
		bottomMarginMobileDevices:148,//mandatory property for mobile devices
		bodyMinHeight:920,
        delaySubMenuHide:500,
        fullHeight:false,
//-----menu---------------------------------------------------------------------------------------		
        menuInit:function (classMenu, classSubMenu){
            classMenu.find(">li").each(function(){
                var conText = $("> a", this).find('.base_text').text();
                //$("> a", this).append("<div class='_area'></div><div class='over_text'>"+conText+"</div>"); 
                $("> a", this).append("<div class='button_act'></div>"); 
			})
		},
		buttonOver:function (item){
		      $(".base_text", item).stop(true).animate({color:'#5b5b5b'}, 250, 'easeOutExpo');
              $(".button_act", item).stop().animate({opacity:1}, 250, 'easeOutExpo');
        },
		buttonOut:function (item){
		          $(".base_text", item).stop(true).animate({color:'#FFF'}, 250, 'easeOutSine');
                  $(".button_act", item).stop().animate({opacity:0}, 250, 'easeInExpo');
        },
		subMenuShow:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"block"});
			}else{
				subMenu.stop(true, true).slideDown(200);
			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true, true).slideUp(200);
			}
        },
//-----PAGE-----------------------------------------------------------------------------------------------
        pageInit:function (pages){
        },
		currPageAnimate:function (page){
             $(".navGall").stop().animate({'height':'0px'}, 550, 'easeOutExpo');
              page.css({left:'2000px'}).stop(true).delay(0).animate({left:0}, 750, "easeInOutExpo");
              isSplash = false;
              $(window).trigger('resize');   
        },
		prevPageAnimate:function (page){
              page.stop(true).animate({left:'-2000px'}, 750, "easeInSine");
      
        },
		backToSplash:function (){
             $(".navGall").stop().animate({'height':'780px'}, 800, 'easeInOutExpo');		  
		      isSplash = true;
              
              
              
              $(window).trigger('resize');        
        },
		pageLoadComplete:function (){
		  

		  
		},
	});
//-----END ajaxJSSwitch------------------------------------------------------------------------------------
loadersInit();
function loadersInit(){
        var opts = {
          lines: 50, // The number of lines to draw
          length: 2, // The length of each line
          width: 2, // The line thickness
          radius: 40, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          color: '#c60505', // #rgb or #rrggbb
          speed: 1.7, // Rounds per second
          trail: 50, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spinner', // The CSS class to assign to the spinner
          zIndex: 2e9, // The z-index (defaults to 2000000000)
          top: 'auto', // Top position relative to parent in px
          left: 'auto' // Left position relative to parent in px
        };
        var target = $("#webSiteLoader > span");
        website_spinner = new Spinner(opts).spin();
        target.append(website_spinner.el)   
        /////////////////////////////////
        var opts2 = {
          lines: 50, // The number of lines to draw
          length: 2, // The length of each line
          width: 2, // The line thickness
          radius: 40, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          color: '#c60505', // #rgb or #rrggbb
          speed: 1.7, // Rounds per second
          trail: 50, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spinner', // The CSS class to assign to the spinner
          zIndex: 2e9, // The z-index (defaults to 2000000000)
          top: 'auto', // Top position relative to parent in px
          left: 'auto' // Left position relative to parent in px
        };
        var target2 = $("#pageLoader > span");
        page_spinner = new Spinner(opts2).spin();
        target2.append(page_spinner.el) 
}
})


$(window).load(function(){	
    $("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){
        website_spinner.stop();
        $("#webSiteLoader").remove();
    });
//-----Window resize------------------------------------------------------------------------------------------
	$(window).resize(
        function(){
            resize_function();
        }
    ).trigger('resize');
    
    function resize_function(){
          
    }
    
    $(document).resize(
        function(){}
    ).trigger('resize');
});