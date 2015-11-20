describe("isTriangle", function() {
	it("is false if the length of one side is greater than or equal to the sum of the other two sides", function() {
		expect(isTriangle(10, 3, 3)).to.equal(false)
	});
});