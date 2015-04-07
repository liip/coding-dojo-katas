ConverterTest = TestCase('ConverterTest');

ConverterTest.prototype.setUp = function() {
    this.converter = new Converter.RomanToArabic();
};

ConverterTest.prototype.testConvertOne = function() {
    assertEquals(1, this.converter.convert('I'));
};

ConverterTest.prototype.testConvertTwo = function() {
    assertEquals(2, this.converter.convert('II'));
};

ConverterTest.prototype.testConvertFour = function() {
    assertEquals(4, this.converter.convert('IV'));
};