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