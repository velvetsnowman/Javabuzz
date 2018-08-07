describe ('JavaBuzz', function() { //describe method for javabuzz

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Java", when divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz", when divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz", when divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('returns the number when not divisible by 3/5/15', function() {
      expect(javabuzz.says(4)).toEqual(4);
    });

  });

});
