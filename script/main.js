(function() {

    $(document).ready(function() {
        function adjust() {
        	if ($(window).width() < 1150){
        		$("p").css('font-size', '18px');
        		$("h4").css('font-size', '20px');
        	}else if ($(window).width() >= 1150 && $(window).width() < 1300){
        		$("p").css('font-size', '20px');
        		$("h4").css('font-size', '23px');
        	}else if ($(window).width() > 1440){
        		$("p").css('font-size', '25px');
        		$("h4").css('font-size', '28px');
        	}else if ($(window).width() >= 1300 && $(window).width() <= 1440){
        		$("p").css('font-size', '22px');
        		$("h4").css('font-size', '25px');
        	}
            $("#float1").height($('#float1').width());
            var h1 = ($("#float1").height()*0.8).toString() + 'px';
            var h2 = ($("#float1").height()*0.78).toString() + 'px';
            var h3 = ($("#float1").height()*1.2).toString() + 'px';
            $("#intro_title").css('top', h1);
            $("#intro_w").css('top', h2);
            $("#video").css('top', h3);
            var h4 = ($("#video_shot").height()).toString() + 'px';
            $("#video_wrap").css('height', h4);
            var h5 = ($("#float1").height() + $("#video_shot").height()*1.3).toString() + 'px';
            $("#challenge").css('top', h5);
            $("#isola2").height($("#isola2").width()*1.2);
            $("#challenge").height($("#isola2").height());
            var h6 = ($("#float1").height() + $("#video_shot").height()*1.3 + $("#challenge").height() + 100).toString() + 'px';
            $("#scenario").css('top', h6);
            $("#scenario").height($("#isola2").width()*3);
            $("iframe").height($("iframe").width()*1004/1700);
            $("#play-button").click(function(){
                $("#play-button").hide();
                $("#video_shot").hide();
                $('iframe').show();
                $('iframe').attr("src", "https://player.vimeo.com/video/215600881?autoplay=1&title=0&byline=0&portrait=0");
            })
            var h7= ($("#video_shot").height()/2-50).toString() + 'px';
            $("#play-button").css('top',h7);
        }
        window.onload = function() {
            window.onresize = adjust;
            adjust();
        }
    });
	var i=0
	function bird_anim(){
		if (i<6){
			i++;
		}else if(i==6){
			i=0;
		}
		if(i==0){
			$('#bird').css('background-image','url("./img/bird1.png")')
		}else if(i==1){
			$('#bird').css('background-image','url("./img/bird2.png")')
		}else if(i==2){
			$('#bird').css('background-image','url("./img/bird3.png")')
		}else if(i==3){
			$('#bird').css('background-image','url("./img/bird4.png")')
		}else if(i==4){
			$('#bird').css('background-image','url("./img/bird5.png")')
		}else if(i==5){
			$('#bird').css('background-image','url("./img/bird6.png")')
		}else if(i==6){
			$('#bird').css('background-image','url("./img/bird7.png")')
		}
	}

	var myVar = setInterval(bird_anim, 100);

})();