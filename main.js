function compareNumbers(a, b) {
    let result;
    switch (true) {
      case a > b:
        result = `${a} is greater than ${b}`;
        break;
      case a < b:
        result = `${a} is less than ${b}`;
        break;
      case a === b:
        result = `${a} is equal to ${b}`;
        break;
      default:
        result = "Invalid entry";
    }
    console.log(result);
  }

  compareNumbers (1,2);
  compareNumbers (7,6);
  compareNumbers (-4,2);
  compareNumbers (4,4);

