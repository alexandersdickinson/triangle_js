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