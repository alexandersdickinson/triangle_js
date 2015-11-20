function isTriangle(s1, s2, s3) {
	if (s1 >= (s2 + s3)){
		return false;
	}
	else if(s2 >= (s1 + s3)){
		return false;
	}
	else if(s3 >= (s1 + s2)){
		return false;
	}
	else{
		return true;
	}
}

function isEquilateral(s1, s2, s3){
	if (s1 === s2 && s2 === s3){
		return true;
	}
	else{
		return false;
	}
}

function isIsosceles(s1, s2, s3){
	if (isEquilateral(s1, s2, s3)){
		return false;
	}
	else if (s1 === s2 || s1 === s3 || s2 === s3){
		return true;
	}
	else{
		return false;
	}
}

function isScalene(s1, s2, s3){
	if (isEquilateral(s1, s2, s3) || isIsosceles(s1, s2, s3)){
		return false;
	}
	else {
		return true;
	}
}

$(document).ready(function(){
	$("#blanks form").submit(function(event){
		var s1 = parseInt($("input#s1").val(), 10);
		var s2 = parseInt($("input#s2").val(), 10);
		var s3 = parseInt($("input#s3").val(), 10);
		if (!(isTriangle(s1, s2, s3))){
			$("#not-triangle").show();
			$("#is-triangle").hide();
		}
		else if (isEquilateral(s1, s2, s3)){
			$("#triangle-type").text("n equilateral");
			$("#is-triangle").show();
			$("#not-triangle").hide();
		}
		else if (isIsosceles(s1, s2, s3)){
			$("#triangle-type").text("n isosceles");
			$("#is-triangle").show();
			$("#not-triangle").hide();
		}
		else{
			$("#triangle-type").text("scalene");
			$("#is-triangle").show();
			$("#not-triangle").hide();
		}
		
		event.preventDefault();
	});
});