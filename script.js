var i=1;
$(document).ready(function(){
	
	var arr=['photos/img1.jpg',
		'photos/img2.jpg',
		'photos/img3.jpg',
		'photos/img4.jpg',
		'photos/img5.jpg'
		];


	
	//$("#cover>div").css('border','5px solid red');

	function change(){
		
		$("#cover>div").fadeOut("slow",function(){
		if(i==0||i==4){
			$("div#cover>div>div").css({'color':'gray'});
		}else{
			$("div#cover>div>div").css({'color':'white'});
		}
		$("#cover>div").css('background-image', `url(${arr[i]})`).fadeIn("medium");
		i+=1;
		if(i==5){
			i=0;
		}
		});

	function turnRight(obj){
		obj.css()
	}	

		$("#members div").hover()


		

	}	

	function changeimg(val){
		i+=val;
		if(i<0){
			i=4;
		}else if(i>4){
			i=0;
		}
		$("cover>div").fadeOut("slow",function(i){
		clearInterval(change);
		
		$("#cover>div").css('background-image', `url(${arr[i]})`).fadeIn("slow");
		});
	}

	
	setInterval(change,5000);
	

	$(".next").click(function(){
		
		changeimg(1);
		
	});
	$(".prev").click(function(){
		
		changeimg(-1);
		
	});

/*
	var text="div.members>div>span";
	$("div.members>div").hover(function(){
		$("div.members>div").addClass("desig").slideDown(500);	
	},function(){
		$("div.members>div").addClass("desig").slideUp(500);
	});
	
*/  $("div.members>div").hover(function(){
		$("div.members>div").append("<div class='desig'></div>");
		$("div.members>div>div").fadeIn(500);
	
		
	},function(){
		$("div.members>div>div").remove();
	});
	
	
});