// -apply function on keydown
// -replace the input field value
// - remove all number characters using replace()
// - slice the string depending on length of string

const Handler = () => {
  const inputField = document.querySelector(".input");
  const result = formatter(inputField.value);
  inputField.value = result;
};

//this function takes in the value, formats it and returns it
const formatter = (input) => {
  //if nothing is entered
  if (!input) return input;
  //remove all non-digit value
  const phoneNumber = input.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  //if length is less than 4, return it unformatted
  if (phoneNumberLength < 4) {
    return phoneNumber;
  }
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  if (phoneNumberLength >= 7)
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 9)}`;
};
