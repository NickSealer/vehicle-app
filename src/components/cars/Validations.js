class Validations {
  static validateString(string) {
    const validateString = /^[\w\s\-]{3,40}$/;
    let result = validateString.test(string);
    return result;
  }

  static validateYear(year) {
    const validateYear = /^[\d]{4}$/;
    let result = validateYear.test(year);
    return result;
  }

  static validateTransmission(transmission) {
    const transmissions = ['MT', 'AT'];
    const validateTransmission = RegExp(`^(${transmissions.join('|')})$`);
    let result = validateTransmission.test(transmission);
    return result;
  }

  static validateCategory(category) {
    const categories = [
      'Convertible', 'Coupe', 'Electric Car', 'Hatchback', 'Hybrid', 'Luxury Car',
      'Luxury SUV','Sedan', 'Sport Car', 'SUV', 'Truck', 'Van'
    ];
    const validateCategory = RegExp(`^(${categories.join('|')})$`);
    let result = validateCategory.test(category);
    return result;
  }
}

export default Validations;
