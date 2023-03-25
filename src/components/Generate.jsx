








export default function Generate() {
  function generateRandomNumbers(min, max, count) {
    let numbers = [];
    while (numbers.length < count) {
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers;
  }
}





