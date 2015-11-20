describe("isTriangle", function() {
	it("is false if the length of one side is greater than or equal to the sum of the other two sides", function() {
		expect(isTriangle(10, 3, 3)).to.equal(false);
	});
	
	it("is true if no side's length is greater than or equal to the sum of the other two sides", function(){
		expect(isTriangle(3, 3, 3)).to.equal(true);
	});
});

describe("isEquilateral", function(){
	it('is true if all sides are the same length', function(){
		expect(isEquilateral(3, 3, 3)).to.equal(true);
	});
	
	it("is false if all sides are not the same length", function(){
		expect(isEquilateral(3, 2, 3)).to.equal(false);
	});
});

describe("isIsosceles", function(){
	it("is true if exactly two sides are of the same length", function(){
		expect(isIsosceles(2, 2, 3)).to.equal(true);
	});
	
	it("is false if it is equilateral", function(){
		expect(isIsosceles(3, 3, 3)).to.equal(false);
	});
	
	it("is false if it is scalene", function(){
		expect(isIsosceles(1, 2, 3)).to.equal(false);
	});
});

describe("isScalene", function(){
	it("is true if all sides are unequal", function(){
		expect(isScalene(1, 2, 3)).to.equal(true);
	});
	
	it("is false if the triangle is equilateral", function(){
		expect(isScalene(3, 3, 3)).to.equal(false);
	});
	
	it("is false if the triangle is isosceles", function(){
		expect(isScalene(3, 2, 3)).to.equal(false);
	});
});